# Signal Client

کلاینت دسکتاپ سبک و شخصی برای ویندوز جهت مدیریت کانفیگ‌های **VMess / VLESS / Trojan / Shadowsocks**.

نسخه اصلاح‌شده با رفع باگ‌های مهم:
- پشتیبانی صحیح از Reality
- جلوگیری از خطای «VLESS without TLS is prohibited»
- حذف `allowInsecure` (که در Xray جدید حذف شده)
- تشخیص هوشمند امنیت لینک‌ها
- نمایش وضعیت TLS/Reality در لیست
- انیمیشن بهتر

## پیش‌نیاز

1. [Node.js LTS](https://nodejs.org) را نصب کنید.
2. هسته Xray را دانلود کنید (پایین توضیح داده شده).

## نصب هسته Xray (الزامی)

چون فایل باینری بزرگ است، هسته را خودتان اضافه کنید:

1. بروید به: https://github.com/XTLS/Xray-core/releases
2. آخرین نسخه **Xray-windows-64.zip** را دانلود کنید.
3. فایل‌های زیر را استخراج کرده و داخل پوشه `core/` پروژه قرار دهید:
   - `xray.exe`
   - `geoip.dat`
   - `geosite.dat`

پوشه نهایی باید شبیه این باشد:
```
core/
  ├── xray.exe
  ├── geoip.dat
  └── geosite.dat
```

## اجرا

```bash
npm install
npm start
```

## ساخت نسخه Portable

```bash
npm run dist
```

فایل `dist/Signal-Client-Portable.exe` ساخته می‌شود.

## نکات

- فقط کانفیگ‌هایی که `security=tls` یا `security=reality` دارند کار می‌کنند.
- کانفیگ‌های VLESS بدون رمزنگاری توسط هسته جدید Xray رد می‌شوند.
- داده‌ها فقط محلی ذخیره می‌شوند (`%APPDATA%/signal-client/`).

## مسئولیت

این ابزار فقط یک کلاینت مدیریت اتصال است. مسئولیت استفاده از آن بر عهده کاربر است.
