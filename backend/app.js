import express from 'express'
import fs from 'fs/promises'
import { format } from 'date-fns'
import { PDFDocument } from 'pdf-lib'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/api', async function (req, res) {
   const data = req.body
   console.log("API", data)
   try {
      // Load the PDF form
      const pdfBytes = await fs.readFile('./contrat-jcb.pdf')
      const pdfDoc = await PDFDocument.load(pdfBytes)

      // Get the form object
      const form = pdfDoc.getForm()

      // Fill the form fields
      const clientTextBox = form.getTextField('clientTextBox')
      clientTextBox.setText(data.clientText)
      const clientTextBox2 = form.getTextField('clientTextBox2')
      clientTextBox2.setText(data.clientText)

      const refTextBox = form.getTextField('refTextBox')
      refTextBox.setText(data.refText)
      const refTextBox2 = form.getTextField('refTextBox2')
      refTextBox2.setText(data.refText)

      const addressTextBox = form.getTextField('addressTextBox')
      addressTextBox.setText(data.addressText)

      const postalCodeTextBox = form.getTextField('postalCodeTextBox')
      postalCodeTextBox.setText(data.postalCodeText)

      const cityTextBox = form.getTextField('cityTextBox')
      cityTextBox.setText(data.cityText)
      const cityTextBox2 = form.getTextField('cityTextBox2')
      cityTextBox2.setText(data.cityText)

      const emailTextBox = form.getTextField('emailTextBox')
      emailTextBox.setText(data.emailText)

      const dateTextBox = form.getTextField('dateTextBox')
      dateTextBox.setText(format(new Date(), 'dd/MM/yyyy'))

      // const checkbox = form.getCheckBox('Subscribe')
      // checkbox.check();

      // Save the modified PDF
      const filledPdfBytes = await pdfDoc.save();
      // await fs.writeFile('filled_form.pdf', filledPdfBytes)

      res.setHeader('Content-Type', 'application/pdf')
      res.setHeader('Content-Disposition', 'inline; filename="contract.pdf"')

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
