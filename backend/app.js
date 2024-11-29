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
      console.log('data.clientText', data.clientText)
      const clientTextBox = form.getTextField('clientTextBox')
      clientTextBox.setText(data.client)
      const clientTextBox2 = form.getTextField('clientTextBox2')
      clientTextBox2.setText(data.client)

      const refTextBox = form.getTextField('refTextBox')
      refTextBox.setText(data.reference)
      const refTextBox2 = form.getTextField('refTextBox2')
      refTextBox2.setText(data.reference)

      const addressTextBox = form.getTextField('addressTextBox')
      addressTextBox.setText(data.address)

      const postalCodeTextBox = form.getTextField('postalCodeTextBox')
      postalCodeTextBox.setText(data.zipcode)

      const cityTextBox = form.getTextField('cityTextBox')
      cityTextBox.setText(data.city)
      const cityTextBox2 = form.getTextField('cityTextBox2')
      cityTextBox2.setText(data.city)

      const phoneTextBox = form.getTextField('phoneTextBox')
      phoneTextBox.setText(data.phone)

      const emailTextBox = form.getTextField('emailTextBox')
      emailTextBox.setText(data.email)

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
