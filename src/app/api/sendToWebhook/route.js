// src/app/api/sendToWebhook/route.js

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Dữ liệu nhận được:", body);

    const { name, email, phone, message } = body;

    // Kiểm tra dữ liệu đầu vào
    if (!name || !email || !phone || !message) {
      return Response.json(
        { error: "Thiếu thông tin bắt buộc (name, email, phone, message)" },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Kiểm tra biến môi trường
    if (!botToken || !chatId) {
      return Response.json(
        { error: "Thiếu cấu hình Telegram Bot" },
        { status: 500 }
      );
    }

    // Format tin nhắn đẹp hơn
    const telegramMessage = `🔔 *Tin nhắn mới từ website Flowly*
👤 *Họ tên:* ${name}
📧 *Email:* ${email}
📱 *Số điện thoại:* ${phone}
💬 *Nội dung:* ${message}
⏰ *Thời gian:* ${new Date().toLocaleString("vi-VN")}`;

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: "Markdown",
        }),
      }
    );

    const data = await telegramRes.json();

    if (!data.ok) {
      console.error("Lỗi Telegram API:", data);
      return Response.json(
        { error: "Không thể gửi tin nhắn", details: data },
        { status: 500 }
      );
    }

    return Response.json({
      message: "Gửi tin nhắn thành công!",
      success: true,
    });
  } catch (err) {
    console.error("Lỗi server:", err);
    return Response.json(
      { error: "Lỗi server: " + err.message },
      { status: 500 }
    );
  }
}
