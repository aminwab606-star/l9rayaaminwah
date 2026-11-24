# Madrasti | مدرستي

منصة تعليمية مستقلة للمنهاج المغربي، مبنية بـ HTML وCSS وJavaScript، ومهيأة للنشر على GitHub Pages.

## محتويات المشروع
- `index.html`: واجهة الموقع.
- `style.css`: التصميم المتجاوب للهاتف والحاسوب.
- `app.js`: المستويات والمواد والبحث والدروس والتمارين والفيديوهات.
- `.github/workflows/deploy.yml`: نشر تلقائي للموقع على GitHub Pages بعد كل تحديث لفرع `main`.

## المستويات المبرمجة
- الابتدائي: الأول إلى السادس.
- الإعدادي: الأولى إلى الثالثة.
- الثانوي التأهيلي: الجذع المشترك، الأولى باك، الثانية باك.
- المواد والشعب مهيأة للتوسيع، مع أمثلة تعليمية أولية.

## إضافة مورد تعليمي
افتح `app.js` وأضف عنصراً إلى المصفوفة `resources`. استعمل:
- `stage`: `primary` أو `middle` أو `high`.
- `grade`: اسم المستوى كما يظهر في القائمة.
- `subject`: اسم المادة.
- `kind`: `lesson` أو `exercise` أو `video`.
- `body`: محتوى الدرس بصيغة HTML.
- `video`: معرّف فيديو YouTube بعد `v=`، بعد التأكد من عنوانه ومناسبته للمستوى.

## تفعيل النشر على GitHub Pages
1. افتح المستودع ثم `Settings`.
2. افتح `Pages`.
3. في `Build and deployment` اجعل `Source` هو `GitHub Actions`.
4. افتح تبويب `Actions` وتأكد من تشغيل Workflow باسم `Deploy Madrasti to GitHub Pages`.
5. بعد نجاح النشر، سيظهر رابط الموقع في صفحة `Settings → Pages`، ويكون غالباً بالشكل `https://aminwab606-star.github.io/l9rayaaminwah/`.

## الكتب والفيديوهات الجامعية
تحتوي مكتبة الجامعة على كتب مقترحة وروابط فهارس ببليوغرافية وصفحات ناشرين، وليس على ملفات PDF غير مرخصة. من العناوين المسجلة أو الموصى بها:
- Théorie générale du droit marocain — Abdelwahed Chair.
- Droit constitutionnel contemporain — Awatif Laghrissi.
- Le Guide du thésard — Sara Elouadi.
- Principes de l'économie — N. Gregory Mankiw وMark P. Taylor.
- Macroéconomie - Semestre II — Abdelhakim El Jaddaoui.
- Excel pour Economie — Abdellah Yousfi.
- Introduction aux réseaux informatiques — Nourddine Enneya.
- Progresser en informatique — Abdelkrim Lamim.

وتتضمن الفيديوهات محاضرات من قناة FSJES Marrakech، وشروحات في القانون الدستوري والاقتصاد الجزئي والمحاسبة. تحقق من توافق كل مورد مع وحدتك ومحاضرات أستاذك.

## ملاحظة حول المحتوى
هذه نسخة أولية فيها أمثلة تعليمية فقط، وليست مكتبة كاملة للمقررات. يجب التحقق من كل درس وفيديو وفق آخر مقرر رسمي والشعبة والمستوى قبل إضافته. لا توجد حالياً حسابات مستخدمين أو قاعدة بيانات أو حفظ للتقدم بين الأجهزة.
