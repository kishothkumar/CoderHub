import mongoose from 'mongoose'

const QuestionSchema = mongoose.Schema({
    questionTitle: { type: String, required: "Question must have a title" },
    questionBody: { type: String, required: "Question must have a Body" },
    questionTags: { type: [String], required: "Question must have a tags" },
    userPosted: { type: String, required: "Question must have an author" },
    userPostedEmail : { type: String, required: "Question must have an author emailID" },
    userId: { type: String },
    upVote: { type: [String], default: [] },
    views: { type: [String], default: [] },
    postedOn: { type: Date, default: Date.now },
    answers: [{
        answerBody: { type: String, required: "Answer must have a body" },
        userAnswered: String,
        userId: String,
        answeredOn: { type: Date, default: Date.now },
        upVote: { type: [String], default: [] },
        downVote: { type: [String], default: [] },
    }]
})

export default mongoose.model("Question", QuestionSchema)