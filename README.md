# Unes Rahimi — Personal Brand Website

## اجرا در VS Code
1. پوشه `unes-rahimi-website` رو در VS Code باز کن (File → Open Folder).
2. افزونه **Live Server** رو نصب کن.
3. روی `index.html` راست‌کلیک کن و **Open with Live Server** رو بزن.

## فایل‌ها
- `index.html` — ساختار صفحه
- `style.css` — ظاهر، رنگ‌ها و ریسپانسیو (رنگ‌ها و فونت‌ها اول فایل در `:root`)
- `script.js` — دوزبانه کردن، منوی موبایل، انیمیشن‌ها
- `unes.jpg` — عکس پرتره

## ویرایش متن‌ها
همه متن‌ها در `script.js` داخل `translations` هستن (fa و en).
هر متن جدید: در HTML `data-i18n="key"` بذار و همون key رو به هر دو زبان اضافه کن.

## لیست‌ها (وظایف شغلی و مهارت‌ها)
لیست‌ها در `script.js` به شکل آرایه نوشته شده‌اند، مثلاً:
```js
role2Tasks: [
  "مورد اول",
  "مورد دوم"
],
```
برای اضافه کردن یک مورد، یک خط جدید داخل [ ] بنویس (هر مورد بین " " و با ویرگول جدا شود).
در HTML این لیست‌ها با `data-i18n-list="role2Tasks"` وصل شده‌اند.
