function generateEmailHTML(name, email, phone, message, program) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
  </style>
</head>
<body style="background-color: #f5f5f5; padding: 20px;">
  <table width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
    
    <!-- Header -->
    <tr>
      <td style="background: linear-gradient(135deg, #f97316 0%, #fb923c 100%); padding: 30px; text-align: center;">
        <h1 style="margin: 0; color: #ffffff; font-size: 28px;">Giant Golem Gym</h1>
        <p style="margin: 10px 0 0 0; color: #ffffff;">New Contact Form</p>
      </td>
    </tr>

    ${
      program
        ? `
    <tr>
      <td style="padding: 20px;">
        <div style="background-color: #fef3c7; border-left: 4px solid #f97316; padding: 12px; border-radius: 4px;">
          <strong style="color: #92400e;">Program: ${program}</strong>
        </div>
      </td>
    </tr>
    `
        : ""
    }

    <!-- Contact Info -->
    <tr>
      <td style="padding: 20px 40px;">
        <p style="margin: 0 0 5px 0; font-size: 12px; color: #6b7280;">NAME</p>
        <p style="margin: 0 0 20px 0; font-size: 16px; color: #111827; font-weight: 600;">${name}</p>

        <p style="margin: 0 0 5px 0; font-size: 12px; color: #6b7280;">EMAIL</p>
        <p style="margin: 0 0 20px 0; font-size: 16px;">
          <a href="mailto:${email}" style="color: #f97316;">${email}</a>
        </p>

        ${
          phone
            ? `
        <p style="margin: 0 0 5px 0; font-size: 12px; color: #6b7280;">PHONE</p>
        <p style="margin: 0 0 20px 0; font-size: 16px;">
          <a href="tel:${phone}" style="color: #f97316;">${phone}</a>
        </p>
        `
            : ""
        }

        <p style="margin: 0 0 5px 0; font-size: 12px; color: #6b7280;">MESSAGE</p>
        <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; border-left: 3px solid #f97316;">
          <p style="margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0; font-size: 12px; color: #6b7280;">
          Sent on ${new Date().toLocaleString()}
        </p>
      </td>
    </tr>

  </table>
</body>
</html>
  `;
}
