import express from 'express'
import fs from 'fs/promises'
import { PDFDocument } from 'pdf-lib'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/api', async function (req, res) {
   console.log("APIAPIAPI", req.body)

   try {
      // Load the PDF form
      const pdfBytes = await fs.readFile('./contrat-1.pdf')
      const pdfDoc = await PDFDocument.load(pdfBytes)

      // Get the form object
      const form = pdfDoc.getForm()

      // Fill the form fields
      const clientField = form.getTextField('client')
      clientField.setText(req.body.client)

      const filerefField = form.getTextField('fileref')
      filerefField.setText(req.body.fileref)

      // const checkbox = form.getCheckBox('Subscribe')
      // checkbox.check();

      // Save the modified PDF
      const filledPdfBytes = await pdfDoc.save();
      // await fs.writeFile('filled_form.pdf', filledPdfBytes)

      res.setHeader('Content-Type', 'application/pdf')
      res.setHeader('Content-Disposition', 'inline; filename="example.pdf"')

      // Send the PDF content
      res.send(Buffer.from(filledPdfBytes))
   } catch (error) {
      console.error('Error filling PDF form:', error)
      res.sendStatus(500)
   }
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
