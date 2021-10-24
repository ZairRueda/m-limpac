let nodemailer = require("nodemailer")
const { Router } = require('express')

const router = Router()



router.post("/send-email", (req, res) => {
    // console.log(req.body);
    // res.send('received')
    const estructura = req.body
    const { 
        nombre, 
        email, 
        telefono, 
        mensaje, 
        estado, 
        ciudad 
    } = estructura

    // console.log(nombre);

    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "e658c4d138f0d9",
          pass: "cdd6813a888d74"
        }
    });
    let mailOptions = {
        from: email,
        to: "miguelangel@mlimpac.com",
        subject: "Contancto desde la pagina",
        text: "Hola Mundo",
        html:
            `<h1> Datos de la persona </h1>
            <ul>
                <li>Nombre: ${nombre}</li>
                <li>Telefono: ${telefono}</li>
                <li>Email: ${email}</li>
                <li>Estado: ${estado}</li>
                <li>Ciudad: ${ciudad}</li>
            </ul>
            <p>Mensaje: ${mensaje}</p>`
    }

    transport.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.status(500).send(error.message);
        } else {
            console.log("email enviado");
            res.status(200).jsonp(req.body);
        }

        window.location.href = "/";

    });
})

module.exports = router