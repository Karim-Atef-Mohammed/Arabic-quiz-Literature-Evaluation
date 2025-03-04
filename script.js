// Data structure for student information
const studentsData = [
    { name: "سيف الدين علي أحمد عطوه", scores: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1], total: 9 },
    { name: "أحمد ممدوح أبو العلا يوسف", scores: [2, 2, 2, 2, 2, 2, 2, 0, 0, 0], total: 14 },
    { name: "أسلم جمال السيد", scores: [1, 1, 1, 0, 0, 1, 2, 0, 0, 1], total: 7 },
    { name: "محمد عاطف سعد فهيم", scores: [1, 2, 1, 0, 2, 2, 0, 0, 0, 0], total: 8 },
    { name: "نور الدين أشرف", scores: [1, 1, 1, 0, 0, 1, 2, 0, 0, 1], total: 7 },
    { name: "عمر محمد أحمد إبراهيم", scores: [2, 2, 2, 2, 2, 2, 2, 1, 2, 2], total: 19 },
    { name: "ب", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], total: 0 },
    { name: ". (النقطة)", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], total: 0 },
    { name: "عبدالله محمد عبدالعزيز", scores: [1, 2, 2, 2, 2, 2, 2, 1, 1, 1], total: 16 },
    { name: "عمرو خالد مجاهد صابون", scores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], total: 20 },
    { name: "محمد سامي عبد الغني", scores: [1, 1, 1, 2, 2, 2, 0, 0, 0, 1], total: 10 },
    { name: "محمد أحمد ذكي", scores: [1, 2, 2, 2, 2, 2, 2, 1, 1, 1], total: 16 },
    { name: "أحمد حسام سعيد محمد", scores: [2, 2, 2, 2, 2, 2, 2, 1, 1, 1], total: 17 },
    { name: "ضياء سعيد عبدالمتعال", scores: [1, 2, 2, 2, 0, 2, 2, 1, 0, 2], total: 14 }
];



// Questions data
const questions = [
    "ما هو المقال؟ وما أنواعه من حيث المضمون؟",
    "هل يمكن حذف بعض الجمل الحوارية في الرواية دون أن يتأثر بناؤها الفني؟ ولماذا؟",
    "ما المقصود من محاكاة الواقع المعيش في الرواية؟",
    "اذكر أشهر رواية، ومن كاتبها؟",
    "ما رأي إدجار ألن بو في القصة القصيرة؟",
    "ما حجم القصة القصيرة؟ وهل يمكن اعتبار القصة القصيرة اختصارًا للقصة الطويلة؟",
    "ماذا يقصد بمفهوم وحدة المسرحية قديمًا وحديثًا؟",
    "ما أسس بناء المسرحية؟",
    "كان لمحمد تيمور ومحمود تيمور فضلٌ على المسرحية بعد ثورة 1818م؛ وضّح.",
    "يُعدّ شوقي رائد المسرح الشعري ناقش ذلك."
];



// Detailed feedback for each student and each question
const detailedFeedback = [
    // 1. سيف الدين علي أحمد عطوه
    [
        { score: 1, feedback: "عرّف المقال جزئيًّا وذكر أنه قصير وطويل لكنه لم يذكر تمامًا أنه يُنشر في صحيفة/مجلة، كما أغفل الأنواع (تصويري/نزالي/فلسفي)." },
        { score: 1, feedback: "ذكر إمكانية الحذف بسبب التفاصيل الزائدة؛ الإجابة صحيحة في الجوهر لكنها غير مفصّلة تمامًا." },
        { score: 1, feedback: "أشار إلى الابتعاد عن الخيال والاعتماد على شخصيات تبدو واقعيّة فقط، ولم يذكر بقية العناصر (الزمان، المكان، اللغة...) بشكل واضح." },
        { score: 0, feedback: "ذكر \"الأيام لطه حسين\" بدلًا من \"زينب لمحمد/أحمد حسين هيكل\"." },
        { score: 1, feedback: "قال: \"قد تختصر كثيرًا\"؛ هذا ليس رأي إدجار ألن بو الحقيقي (عدم إمكانية حذف كلمة)، لكنه أجاب بجملة غير صحيحة؛ ومع ذلك ليست عدم إجابة تامّة." },
        { score: 1, feedback: "ذكر حجمًا غير دقيق (3000–7000) وقال: \"يمكن اعتبارها اختصارًا\" بخلاف المطلوب؛ إجابة غير مطابقة للنموذج." },
        { score: 1, feedback: "إجابة مختصرة جدًّا، لم يذكر وحدة الزمان أو المكان أو الحدث قديمًا ولا تفصيل المفهوم الحديث." },
        { score: 1, feedback: "قال: \"المشاهد - الشخصيات - وضوح الفكرة\" فقط؛ أغفل الصراع والحكاية والحوار." },
        { score: 1, feedback: "اكتفى بالإشارة إلى \"إضافة المسرحية الكوميدية\" دون ذكر التفصيل (المسرحية الاجتماعية والتاريخية)." },
        { score: 1, feedback: "اكتفى بالقول إنه ألّف مسرحيات شعرية كثيرة دون تفصيل كافٍ." }
    ],
    // 2. أحمد ممدوح أبو العلا يوسف
    [
        { score: 2, feedback: "عرّفه تعريفًا صحيحًا وكاملًا وذكر نشره في صحيفة/مجلة وأنواعه." },
        { score: 2, feedback: "أوضح أنّه يمكن الحذف لكثرة الإسهاب والوصف." },
        { score: 2, feedback: "أجاب بشكل مفصّل عن الأحداث والأشخاص والمكان والزمان واللغة." },
        { score: 2, feedback: "ذكر \"زينب\" لمحمد حسين هيكل (إجابة سليمة)." },
        { score: 2, feedback: "ذكر رأي إدجار ألن بو بأنّه لا يمكن حذف ولو كلمة واحدة." },
        { score: 2, feedback: "حجم القصة القصيرة أقل من ألف إلى 12 ألف، وبيّن أنها ليست اختصارًا." },
        { score: 2, feedback: "فرّق بين المفهوم القديم (وحدة الزمان والمكان والحدث) والحديث (الدقّة في توزيع الاهتمام)." },
        { score: 0, feedback: "لم يجب إطلاقًا." },
        { score: 0, feedback: "لم يجب إطلاقًا." },
        { score: 0, feedback: "لم يجب إطلاقًا." }
    ],
    // 3. أسلم جمال السيد
    [
        { score: 1, feedback: "قال: \"هو نص نثري...\"؛ لم يذكر النشر في صحيفة/مجلة ولا الأنواع كاملة." },
        { score: 1, feedback: "أشار إلى إمكانية الحذف دون تفصيل كبير." },
        { score: 1, feedback: "ركّز على أن الشخصيات ليست خيالية فحسب، وأغفل المكان والزمان واللغة." },
        { score: 0, feedback: "قال: \"زينب لأحمد شوقي\" وهذا خطأ؛ الكاتب الصحيح: \"محمد/أحمد حسين هيكل\"." },
        { score: 0, feedback: "لم يجب (وضع نقطة فقط)." },
        { score: 1, feedback: "قال لا تزيد عن عشرة آلاف كلمة، وأنها ليست اختصارًا؛ قريب من المطلوب لكن ليس بدقّة." },
        { score: 2, feedback: "ذكر الفرق بين المفهوم القديم والحديث بوضوح." },
        { score: 0, feedback: "لم يجب." },
        { score: 0, feedback: "لم يجب." },
        { score: 1, feedback: "ذكر بعض أعمال شوقي من غير تفصيل كامل." }
    ],
    // 4. محمد عاطف سعد فهيم
    [
        { score: 1, feedback: "عرّفه بأنّه بحث قصير لا يتجاوز تسع صفحات ويُنشر، ولم يذكر الأنواع المطلوبة." },
        { score: 2, feedback: "أجاب أن هناك إسهابًا في التفاصيل يمكن حذفه؛ إجابة سليمة وواضحة." },
        { score: 1, feedback: "قال: \"أحداث من العالم الحقيقي ولو كانت متخيلة\"؛ لم يفصّل بقية العناصر كالزمان والمكان واللغة." },
        { score: 0, feedback: "صرّح بأنّه لا يذكر (صفر)." },
        { score: 2, feedback: "قال إن رأي إدجار ألن بو هو عدم إمكانية حذف كلمة واحدة؛ الإجابة صحيحة." },
        { score: 2, feedback: "قال: 1k - 12k كلمة، وإنها ليست اختصارًا." },
        { score: 0, feedback: "لم يجب." },
        { score: 0, feedback: "لم يجب." },
        { score: 0, feedback: "لم يجب." },
        { score: 0, feedback: "لم يجب." }
    ],
    // 5. نور الدين أشرف
    [
        { score: 1, feedback: "قال \"بحث قصير في أحد المجالات...\" ولم يذكر تمامًا التفصيل حول أنواعه الثلاثة ولا شرط النشر في صحيفة/مجلة." },
        { score: 1, feedback: "قال: \"نعم، يمكن حذف تفاصيل وصف الطريق...\"؛ صحيح الفكرة لكن مختصرة." },
        { score: 1, feedback: "اقتصر على كون الشخصيات واقعية. أغفل المكان والزمان واللغة." },
        { score: 0, feedback: "قال: \"زينب لأحمد شوقي\" (خطأ)." },
        { score: 0, feedback: "لم يجب." },
        { score: 1, feedback: "قال: \"لا تزيد عن 10 آلاف كلمة\" وأنها ليست اختصارًا؛ قريب من الصحيح لكن غير مكتمل." },
        { score: 2, feedback: "ذكر الفرق بين قديما (24 ساعة ومكان واحد) وحديثًا (أهم شيء وحدة الموضوع)." },
        { score: 0, feedback: "لم يجب." },
        { score: 0, feedback: "لم يجب." },
        { score: 1, feedback: "قال إن شوقي كتب أعمالًا مثل \"ليلى والمجنون، كليوباترا\"، بلا تفاصيل أخرى." }
    ],
    // 6. عمر محمد أحمد إبراهيم
    [
        { score: 2, feedback: "عرّف المقال تعريفًا سليمًا وذكر نشره في صحيفة/مجلة وأنواعه من حيث المضمون بدقّة." },
        { score: 2, feedback: "قال: \"نعم، لأن الكاتب قد يصف التفاصيل بإسهاب إلى حدّ الإملال...\"؛ إجابة صائبة." },
        { score: 2, feedback: "أجاب بشكل وافٍ عن الأحداث والشخصيات والمكان والزمان واللغة." },
        { score: 2, feedback: "قال: \"زينب لمحمد حسين هيكل عام 1913\"؛ صحيح." },
        { score: 2, feedback: "ذكر رأي إدجار ألن بو بعدم إمكانية حذف ولو كلمة؛ صحيح." },
        { score: 2, feedback: "حدد الحجم (أقل من ألف إلى 12 ألف) وأنها ليست اختصارًا؛ صحيح." },
        { score: 2, feedback: "فرّق بدقّة بين المفهوم القديم والحديث." },
        { score: 1, feedback: "ذكر الشخصيات فقط ولم يذكر الحكاية والفكرة والصراع والحوار صراحة." },
        { score: 2, feedback: "ذكر فضل محمد تيمور في المسرحية الاجتماعية، ومحمود في التاريخية؛ صحيح." },
        { score: 2, feedback: "ذكر أبرز مسرحيات شوقي الشعرية (كليوباترا، ليلى...) وعدّه رائدًا؛ إجابة وافية." }
    ],
    // 7. ب
    [
        { score: 0, feedback: "لم يجب إطلاقًا (كتب رموز غير مفهومة)." },
        { score: 0, feedback: "لم يجب إطلاقًا (كتب رموز غير مفهومة)." },
        { score: 0, feedback: "لم يجب إطلاقًا (كتب رموز غير مفهومة)." },
        { score: 0, feedback: "لم يجب إطلاقًا (كتب رموز غير مفهومة)." },
        { score: 0, feedback: "لم يجب إطلاقًا (كتب رموز غير مفهومة)." },
        { score: 0, feedback: "لم يجب إطلاقًا (كتب رموز غير مفهومة)." },
        { score: 0, feedback: "لم يجب إطلاقًا (كتب رموز غير مفهومة)." },
        { score: 0, feedback: "لم يجب إطلاقًا (كتب رموز غير مفهومة)." },
        { score: 0, feedback: "لم يجب إطلاقًا (كتب رموز غير مفهومة)." },
        { score: 0, feedback: "لم يجب إطلاقًا (كتب رموز غير مفهومة)." }
    ],
    // 8. . (النقطة)
    [
        { score: 0, feedback: "لم يجب إطلاقًا (وضع نقطة فقط)." },
        { score: 0, feedback: "لم يجب إطلاقًا (وضع نقطة فقط)." },
        { score: 0, feedback: "لم يجب إطلاقًا (وضع نقطة فقط)." },
        { score: 0, feedback: "لم يجب إطلاقًا (وضع نقطة فقط)." },
        { score: 0, feedback: "لم يجب إطلاقًا (وضع نقطة فقط)." },
        { score: 0, feedback: "لم يجب إطلاقًا (وضع نقطة فقط)." },
        { score: 0, feedback: "لم يجب إطلاقًا (وضع نقطة فقط)." },
        { score: 0, feedback: "لم يجب إطلاقًا (وضع نقطة فقط)." },
        { score: 0, feedback: "لم يجب إطلاقًا (وضع نقطة فقط)." },
        { score: 0, feedback: "لم يجب إطلاقًا (وضع نقطة فقط)." }
    ],
    // 9. عبدالله محمد عبدالعزيز
    [
        { score: 1, feedback: "قال \"بحث قصير في العلم أو السياسة أو الأدب... ينشر في مجلة...\" لكنه لم يذكر الأنواع بدقّة (استخدم \"روائي\" بدلًا من \"نزالي\"، إلخ)." },
        { score: 2, feedback: "أجاب بفكرة الإسهاب بالتفاصيل وإمكانية الحذف." },
        { score: 2, feedback: "أجاب عن الأحداث والشخصيات والزمان والمكان واللغة بوضوح." },
        { score: 2, feedback: "قال: \"زينب لمحمد حسين هيكل.\" صحيح." },
        { score: 2, feedback: "قال: \"لا يمكن حذف كلمة واحدة\"؛ صحيح." },
        { score: 2, feedback: "ذكر (1k -12k) وأكّد أنها ليست اختصارًا؛ صحيح." },
        { score: 2, feedback: "فرّق بين وحدة الزمان والمكان قديمًا، وعدم الالتزام حديثًا." },
        { score: 1, feedback: "أجاب عن الشخصيات فقط، ولم يذكر الحكاية/الفكرة/الصراع/الحوار." },
        { score: 1, feedback: "قال باختصار إنهما تناولا المسرح الاجتماعي/التاريخي لكن دون تفصيل." },
        { score: 1, feedback: "ذكر أنّ شوقي كتب بعض المسرحيات الشعرية ولم يفصّل كثيرًا." }
    ],
    // 10. عمرو خالد مجاهد صابون
    [
        { score: 2, feedback: "عرّفه تعريفًا جيّدًا، وذكر أنه بحث قصير في الأدب والعلم والسياسة إلخ، وأنواعه (تصويري–نزالي–فلسفي)." },
        { score: 2, feedback: "بيَّن أن الحذف جائز بسبب الإسهاب في التفاصيل." },
        { score: 2, feedback: "وضّح عناصر محاكاة الواقع: الأحداث والأشخاص والزمان والمكان واللغة." },
        { score: 2, feedback: "ذكر \"زينب لأحمد حسين هيكل.\"" },
        { score: 2, feedback: "ذكر رأي إدجار ألن بو بعدم إمكانية حذف كلمة." },
        { score: 2, feedback: "حدّد الحجم (أقل من ألف إلى 12 ألف) وذكر أنها ليست اختصارًا." },
        { score: 2, feedback: "فرّق بوضوح بين القديم (وحدة الزمان/المكان/الحدث) والحديث (توزيع الاهتمام)." },
        { score: 2, feedback: "ذكر العناصر الخمسة: الفكرة، الحكاية، الشخصيات، الصراع، الحوار." },
        { score: 2, feedback: "بيّن فضل محمد تيمور في المسرحية الاجتماعية، ومحمود تيمور في المسرحية التاريخية." },
        { score: 2, feedback: "ذكر مسرحيات شوقي الشعرية (كليوباترا، ليلى، قمبيز...) وعدّه رائدًا؛ إجابة كاملة." }
    ],
    // 11. محمد سامي عبد الغني
    [
        { score: 1, feedback: "قال إنه بحث قصير في الأدب أو السياسة إلخ، وذكر أنواعًا كثيرة (نزالي/علمي/اجتماعي/فلسفي...) لكن لم يحدد بوضوح النشر في صحيفة/مجلة." },
        { score: 1, feedback: "اكتفى بالإشارة إلى إمكانية الحذف." },
        { score: 1, feedback: "لم يُفصّل جميع العناصر؛ أجاب إجابة عامة عن الأحداث والشخصيات." },
        { score: 2, feedback: "ذكر \"زينب\" لمحمد حسين هيكل." },
        { score: 2, feedback: "ذكر رأي إدجار ألن بو بعدم إمكانية الحذف." },
        { score: 2, feedback: "قال من 1k إلى 12k، وليست اختصارًا؛ إجابة صحيحة." },
        { score: 0, feedback: "صرّح بأنه لا يعلم." },
        { score: 0, feedback: "صرّح بأنه لا يعلم." },
        { score: 0, feedback: "صرّح بأنه لا يعلم." },
        { score: 1, feedback: "قال إن شوقي بدأ في فرنسا ثم كتب \"علي بك الكبير\"؛ إجابة موجزة جدًّا لكن فيها محاولة." }
    ],
    // 12. محمد أحمد ذكي
    [
        { score: 1, feedback: "قال إنه بحث قصير في السياسة أو الاجتماع إلخ ويُنشر في مجلة، لكن لم يذكر الأنواع (تصويري/نزالي/فلسفي)." },
        { score: 2, feedback: "قال نعم، بسبب الإسهاب؛ إجابة صحيحة." },
        { score: 2, feedback: "فصّل الأمور: الأحداث، الشخصيات، الزمن، المكان، اللغة." },
        { score: 2, feedback: "ذكر \"زينب\" للكاتب هيكل." },
        { score: 2, feedback: "ذكر \"لا يمكن حذف كلمة واحدة\"؛ صحيح." },
        { score: 2, feedback: "ذكر الحد (1k–12k) وأنها ليست اختصارًا؛ صحيح." },
        { score: 2, feedback: "فرّق بوضوح بين القديم (وحدة الزمان/المكان/الحدث) والحديث." },
        { score: 1, feedback: "ذكر البداية والوسط والنهاية والشخصيات، لكنه لم يذكر صراحة \"الفكرة والحكاية والصراع والحوار\"." },
        { score: 1, feedback: "لم يذكر التفاصيل (المسرحية الاجتماعية عند محمد تيمور والتاريخية عند محمود)." },
        { score: 1, feedback: "قال إن شوقي كتب بعض المسرحيات الشعرية كـ\"ليلى وكليوباترا\" بلا تفصيل وافٍ." }
    ],
    // 13. أحمد حسام سعيد محمد
    [
        { score: 2, feedback: "قال إنه بحث قصير يُنشر في صحيفة/مجلة، وذكر (نزالي/تصويري/اجتماعي/فلسفي)." },
        { score: 2, feedback: "برّر الحذف بالإسهاب؛ صحيح." },
        { score: 2, feedback: "ذكر العناصر الخمسة (الأحداث والشخصيات والمكان والزمان واللغة)." },
        { score: 2, feedback: "قال: \"زينب\" لمحمد حسين هيكل؛ صحيح." },
        { score: 2, feedback: "ذكر رأي إدجار ألن بو بعدم إمكانية الحذف." },
        { score: 2, feedback: "ذكر الحجم (أقل من ألف إلى 12 ألف) وأنها ليست اختصارًا؛ صحيح." },
        { score: 2, feedback: "وضّح الفرق بين القديم والحديث جيدًا." },
        { score: 1, feedback: "ذكر بداية/وسط/نهاية ولم يذكر \"الحكاية والفكرة والصراع والحوار\" صراحة." },
        { score: 1, feedback: "اكتفى بالتلميح لتأثيرهما في المسرح دون تفصيل (المسرحية الاجتماعية/التاريخية)." },
        { score: 1, feedback: "ذكر بعض أعمال شوقي بسرعة دون سرد وافٍ." }
    ],
    // 14. ضياء سعيد عبدالمتعال شاكر النجار
    [
        { score: 1, feedback: "قال إنه نوعٌ من النثر يناقش موضوعًا ما، ولم يذكر نشره في صحيفة/مجلة ولا الأنواع الثلاثة صراحة." },
        { score: 2, feedback: "قال نعم؛ بسبب الإسهاب في الوصف والتفاصيل." },
        { score: 2, feedback: "وضّح فكرة أنّ الأشخاص والأحداث والأماكن من الواقع، والزمان محدّد، إلخ." },
        { score: 2, feedback: "قال: \"زينب\" لمحمد حسين هيكل؛ صحيح." },
        { score: 0, feedback: "لم يجب." },
        { score: 2, feedback: "ذكر أنّها قد تصل إلى 12 ألف كلمة وليست اختصارًا؛ صحيح." },
        { score: 2, feedback: "أجاب بفكرة القديم (وحدة الزمان والمكان والحدث) والحديث (التوزيع والتوازن)." },
        { score: 1, feedback: "قال إن الأساس هو توصيل فكرة رئيسية بالصراع الحواري... إلخ، لكن لم يذكر العناصر الخمسة صراحة." },
        { score: 0, feedback: "لم يجب." },
        { score: 2, feedback: "ذكر بدايات شوقي في فرنسا، ثم مسرحياته (ليلى، كليوباترا...) ووصفه بأنه أمير الشعراء؛ إجابة جيّدة." }
    ]
    ];

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Populate the table
    populateTable();
    
    // Populate top performers
    populateTopPerformers();
    
    // Create performance chart
    createPerformanceChart();
    
    // Create questions analysis chart
    createQuestionsChart();
    
    // Add animation class with delay to the table rows
    const tableRows = document.querySelectorAll('#studentsTable tbody tr');
    tableRows.forEach((row, index) => {
        setTimeout(() => {
            row.style.opacity = "1";
        }, 100 * index);
    });
    
    // Add event listener to close modal button
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    
    // Close modal when clicking outside the content
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('studentModal')) {
            closeModal();
        }
    });
});

// Function to populate the table
function populateTable() {
    const tableBody = document.querySelector('#studentsTable tbody');
    tableBody.innerHTML = '';
    
    studentsData.forEach((student, index) => {
        const row = document.createElement('tr');
        row.style.opacity = "0";
        row.style.transition = "opacity 0.5s ease";
        row.classList.add('clickable-row'); // Add clickable class
        row.setAttribute('data-student-id', index); // Store student ID in the row
        
        // Regular cell for student name (no longer a link)
        let rowHTML = `<td>${student.name}</td>`;
        
        // Add cells for each question score
        student.scores.forEach(score => {
            rowHTML += `<td><span class="score-${score}">${score}</span></td>`;
        });
        
        // Add total score
        rowHTML += `<td class="total-score">${student.total}</td>`;
        
        row.innerHTML = rowHTML;
        tableBody.appendChild(row);
    });
    
    // Add click event listeners to the entire rows
    document.querySelectorAll('.clickable-row').forEach(row => {
        row.addEventListener('click', function() {
            const studentId = this.getAttribute('data-student-id');
            showStudentDetails(studentId);
        });
    });
}

// Function to populate top performers
function populateTopPerformers() {
    const topPerformersDiv = document.getElementById('topPerformers');
    const sortedStudents = [...studentsData].sort((a, b) => b.total - a.total);
    const topFive = sortedStudents.slice(0, 5);
    
    topPerformersDiv.innerHTML = '';
    
    topFive.forEach((student, index) => {
        // Find the index of this student in the original studentsData array
        const originalIndex = studentsData.findIndex(s => s.name === student.name);
        
        const studentEl = document.createElement('div');
        studentEl.classList.add('top-student', 'clickable-row');
        studentEl.setAttribute('data-student-id', originalIndex);
        studentEl.style.animationDelay = `${index * 0.2}s`;
        
        studentEl.innerHTML = `
            <span class="student-name">${student.name}</span>
            <span class="student-score">${student.total} / 20</span>
        `;
        
        topPerformersDiv.appendChild(studentEl);
    });
    
    // Add click event listeners to the top performers
    document.querySelectorAll('.top-student').forEach(element => {
        element.addEventListener('click', function() {
            const studentId = this.getAttribute('data-student-id');
            showStudentDetails(studentId);
        });
    });
}

// Function to create the performance chart
function createPerformanceChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    
    // Sort students by total score
    const sortedStudents = [...studentsData].sort((a, b) => b.total - a.total);
    
    const labels = sortedStudents.map(student => student.name);
    const data = sortedStudents.map(student => student.total);
    const colors = data.map(score => {
        if (score >= 15) return '#28a745';
        if (score >= 10) return '#17a2b8';
        if (score >= 5) return '#ffc107';
        return '#dc3545';
    });
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'إجمالي الدرجات',
                data: data,
                backgroundColor: colors,
                borderColor: 'rgba(0, 0, 0, 0.1)',
                borderWidth: 1,
                borderRadius: 5,
                maxBarThickness: 35
            }]
        },
        options: {
            animation: {
                delay: (context) => context.dataIndex * 100
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#563d7c',
                    padding: 12,
                    titleFont: {
                        size: 14,
                        family: 'Tajawal'
                    },
                    bodyFont: {
                        size: 14,
                        family: 'Tajawal'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 20,
                    title: {
                        display: true,
                        text: 'الدرجات',
                        font: {
                            size: 14,
                            family: 'Tajawal'
                        }
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 90,
                        minRotation: 45,
                        font: {
                            size: 12,
                            family: 'Tajawal'
                        }
                    }
                }
            }
        }
    });
}

// Function to create the questions analysis chart
function createQuestionsChart() {
    const ctx = document.getElementById('questionsChart').getContext('2d');
    
    // Calculate the average score for each question
    const questionAverages = [];
    for (let i = 0; i < 10; i++) {
        let sum = 0;
        studentsData.forEach(student => {
            sum += student.scores[i];
        });
        questionAverages.push((sum / studentsData.length).toFixed(1));
    }
    
    // Count scores of 0, 1, and 2 for each question
    const scoresCount = Array(10).fill().map(() => ({ '0': 0, '1': 0, '2': 0 }));
    
    studentsData.forEach(student => {
        student.scores.forEach((score, qIndex) => {
            scoresCount[qIndex][score.toString()]++;
        });
    });
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['سؤال 1', 'سؤال 2', 'سؤال 3', 'سؤال 4', 'سؤال 5', 'سؤال 6', 'سؤال 7', 'سؤال 8', 'سؤال 9', 'سؤال 10'],
            datasets: [
                {
                    label: 'متوسط الدرجات لكل سؤال',
                    data: questionAverages,
                    backgroundColor: 'rgba(111, 66, 193, 0.2)',
                    borderColor: 'rgba(111, 66, 193, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(111, 66, 193, 1)'
                }
            ]
        },
        options: {
            animation: {
                duration: 2000
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 2,
                    ticks: {
                        stepSize: 0.5
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        afterLabel: function(context) {
                            const qIndex = context.dataIndex;
                            return [
                                `درجة 0: ${scoresCount[qIndex]['0']} طالب`,
                                `درجة 1: ${scoresCount[qIndex]['1']} طالب`,
                                `درجة 2: ${scoresCount[qIndex]['2']} طالب`
                            ];
                        }
                    }
                }
            }
        }
    });
}

// Function to show student details in modal
function showStudentDetails(studentId) {
    const student = studentsData[studentId];
    const studentFeedback = detailedFeedback[studentId];
    const modal = document.getElementById('studentModal');
    const contentDiv = document.getElementById('studentDetailContent');
    
    // Determine badge class based on score
    let badgeClass = 'poor';
    if (student.total >= 15) {
        badgeClass = 'excellent';
    } else if (student.total >= 10) {
        badgeClass = 'good';
    } else if (student.total >= 5) {
        badgeClass = 'average';
    }
    
    // Generate HTML for the student detail view
    let detailHTML = `
        <div class="student-detail-header">
            <h2 class="student-detail-name">${student.name}</h2>
            <span class="student-total-badge ${badgeClass}">${student.total} / 20</span>
        </div>
        
        <div class="student-details">
    `;
    
    // Generate question items with feedback
    student.scores.forEach((score, index) => {
        detailHTML += `
            <div class="question-item" style="animation-delay: ${index * 0.1}s">
                <div class="question-header">
                    <div class="question-title">السؤال ${index + 1}</div>
                    <span class="score-${score}">${score}</span>
                </div>
                <div class="question-text">${questions[index]}</div>
                <div class="feedback-section">
                    <h4>التقييم والملاحظات:</h4>
                    <p>${studentFeedback[index].feedback}</p>
                </div>
            </div>
        `;
    });
    
    detailHTML += `
        </div>
        <div class="student-detail-actions">
            <button class="back-button" id="closeDetailButton">عودة</button>
        </div>
    `;
    
    // Update the modal content
    contentDiv.innerHTML = detailHTML;
    
    // Show the modal
    modal.classList.add('show');
    
    // Add event listener to close button
    document.getElementById('closeDetailButton').addEventListener('click', function() {
        closeModal();
    });
    
    // Add event listener to close modal icon
    document.querySelector('.close-modal').addEventListener('click', function() {
        closeModal();
    });
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('studentModal');
    modal.classList.remove('show');
}