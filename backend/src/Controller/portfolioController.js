import { Portfolio } from "../schema/model.js";
import { email } from "../utils/constant.js";
import { sendEmail } from "../utils/sendMail.js";

export const portfolioController = async (req, res, next) => {
  try {
    let result = await Portfolio.create(req.body);

    await sendEmail({
      to: req.body.email,
      subject: "Message Received",
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h1 style="color: #333;">Hello ${req.body.fullName},</h1>
        <p style="color: #555;">
          Thank you for your message. I appreciate your interest and will get back to you as soon as possible.
        </p>
        <p style="color: #555;">
          If you have any further questions in the meantime, feel free to reach out.
        </p>
        <p style="color: #555;">
          Best regards,<br />
          Aaryan Sharma<br />
          Full Stack Developer<br />
          ${email}
        </p>
      </div>
    `,
    });

    await sendEmail({
      to: "lazyfox916@gmail.com",
      subject: "New message received",
      html: `<h1>Message received from your portfolio</h1><br/>
      <p>Name: ${req.body.fullName} <br/> Email : ${req.body.email} <br/> Message : ${req.body.message}</p>`,
    });

    res.status(200).json({
      success: true,
      message: "Portfolio created successfully",
      data: result,
    });
  } catch (error) {
    res.status(error.status).json({
      success: false,
      message: error.message,
    });
  }
};
