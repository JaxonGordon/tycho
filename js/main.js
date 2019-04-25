    console.clear();
    console.log("hello test");

    function makeQ(q, a, level) {
        let question = {}
        question.q = q;
        question.a = a;
        question.level = level;
        return question;
    }

    let questions = [];
    questions.push(makeQ("2^3", "8", 1));
    questions.push(makeQ("\\dfrac{1}{2}", ".5", 1));
    questions.push(makeQ("\\dfrac{3}{4}", ".5", 1));
    questions.push(makeQ("\\sqrt{16}", "4", 1));
    questions.push(makeQ("\\sqrt{64}=4", "False", 1));


    makeTest();

    function makeTest(e) {
        for (let i = 0; i < questions.length; i++) {
            if (i % 2 == 1)
                theQuestion = '<div class="odd">';
            else
            theQuestion = '<div class="even">';
            theQuestion += '\\(';
            theQuestion += questions[i].q;
            theQuestion += '\\)';
            theQuestion += '<input data-answer="';
            theQuestion += questions[i].a;
            theQuestion += '">'
            theQuestion += '</div>';
            $('#theQuestions').append(theQuestion);
        }
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

    }

   $("input").change(checkAnswer);
   

    function doesMatch(a, b) {
        console.log(a, b)
        a = a.toString().toLowerCase().trim();
        b = b.toString().toLowerCase().trim();
        console.log(a, b)

        if (a == b) {
            return true;
        } else {
            return false;
        }

    }

    function checkAnswer(e) {
        correct = $(this).data("answer");
        response = $(this).val();

        // if (correct == response) {
        if (doesMatch(correct, response)) {
            $(this).removeClass("incorrect").addClass("correct");
            var numCorrect = $("#numCorrect").text();
            $("#numCorrect").text(numCorrect * 1 + 1);
        } else {
            $(this).removeClass("correct").addClass("incorrect");
        }
    }

    