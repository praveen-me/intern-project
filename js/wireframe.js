var data = {
  "gradesList": [
    {
      "name": "Grade 11",
      "subjectList": [
        {
          "name": "Science",
          "chapterList": [
            {
              "name": "Electric Charge",
              "questionList": [
                {
                  "question": "What is charge?",
                  "answer": "Electric Charge is that physical property of matter due to which the other matter experience a force when matters are placed in electromagnetic field."
                },
                {
                  "question": " How much positive and negative charge is there in a cup of water?",
                  "answer": "The number of molecules in one cup of water is (250/18) × 6.02 × 1023"
                }
              ]
            }
          ]
        },
{
          "name": "Mathematics",
          "chapterList": [
            {
              "name": "Equation of line",
              "questionList": [
                {
                  "question": "What is the slope of x=0?",
                  "answer": "Infinite"
                },
                {
                  "question": " What is the slope of y=0?",
                  "answer": "Zero"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Grade 12",
      "subjectList": [
        {
          "name": "Social Studies",
          "chapterList": [
            {
              "name": "Rulers of USA",
              "questionList": [
                {
                  "question": "Who controlled the colony of New York before the English?",
                  "answer": "The Dutch"
                },
                {
                  "question": " Who was the founder of New York and New Jersey?",
                  "answer": "The Duke of York"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

// Physics Question List Starts
const physicsQuestionList = data.gradesList[0].subjectList[0].chapterList[0];

const physicsQuestionOne =  physicsQuestionList.questionList[0].question;

const physicsAnswerOne = physicsQuestionList.questionList[0].answer;

const physicsQuestionTwo = physicsQuestionList.questionList[1].question;

const physicsAnswerTwo = physicsQuestionList.questionList[1].answer;
//Physics Question List Ends

// Maths Question List Starts
const matheMaticsQuestionList = data.gradesList[0].subjectList[1].chapterList[0];

const matheMaticsQuestionOne = matheMaticsQuestionList.questionList[0].question;

const matheMaticsAnswerOne = matheMaticsQuestionList.questionList[0].answer;

const matheMaticsQuestionTwo = matheMaticsQuestionList.questionList[1].question;

const matheMaticsAnswerTwo = matheMaticsQuestionList.questionList[1].answer;

// Maths Question List Ends


//Social Sciencs QuestionList Starts
const socialScienceQuestionList = data.gradesList[1].subjectList[0].chapterList[0];

const socialScienceQuestionOne = socialScienceQuestionList.questionList[0].question;

const socialScienceAnswerOne = socialScienceQuestionList.questionList[0].answer;

const socialScienceQuestionTwo = socialScienceQuestionList.questionList[1].question;

const socialScienceAnswerTwo = socialScienceQuestionList.questionList[1].answer;
// Social Science Question List Ends


//For Testing Purpose
// console.log(socialScienceQuestionOne);
// console.log(matheMaticsAnswerOne);
// console.log(matheMaticsQuestionTwo);
// console.log(matheMaticsAnswerTwo);

$(function($){
  $('#first').on('click', function(){
    $('#questionAnswerPartOne').children('*').remove();
    $('#questionAnswerPartTwo').children('*').remove();
    $('#questionAnswerPartOne').append('<p class="questionOne"> Q1) '+physicsQuestionOne+'</p>')
    $('#questionAnswerPartOne').append('<p class"answerOne"> Ans) '+physicsAnswerOne+'</p>');
    $('#questionAnswerPartTwo').append('<p class="questionTwo"> Q2) '+physicsQuestionTwo+'</p>');
    $('#questionAnswerPartTwo').append('<p class="answerTwo"> Ans) '+physicsAnswerTwo+'</p>');
  });
  $('#second').on('click', function(){
    $('#questionAnswerPartOne').children('*').remove();
    $('#questionAnswerPartTwo').children('*').remove();
    $('#questionAnswerPartOne').append('<p class="questionOne"> Q1) '+matheMaticsQuestionOne+'</p>')
    $('#questionAnswerPartOne').append('<p class"answerOne"> Ans) '+matheMaticsAnswerOne+'</p>');
    $('#questionAnswerPartTwo').append('<p class="questionTwo"> Q2) '+matheMaticsQuestionTwo+'</p>');
    $('#questionAnswerPartTwo').append('<p class="answerTwo"> Ans) '+matheMaticsAnswerTwo+'</p>');
  });
  $('#third').on('click', function(){
    $('#questionAnswerPartOne').children('*').remove();
    $('#questionAnswerPartTwo').children('*').remove();
    $('#questionAnswerPartOne').append('<p class="questionOne"> Q1) '+socialScienceQuestionOne+'</p>')
    $('#questionAnswerPartOne').append('<p class"answerOne"> Ans) '+socialScienceAnswerOne+'</p>');
    $('#questionAnswerPartTwo').append('<p class="questionTwo"> Q2) '+socialScienceQuestionTwo+'</p>');
    $('#questionAnswerPartTwo').append('<p class="answerTwo"> Ans) '+socialScienceAnswerTwo+'</p>');
  });
});
