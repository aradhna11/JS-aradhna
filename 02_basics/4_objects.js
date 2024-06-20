const course ={
    name:"js learning",
    price:"999",
    courseTutor:"aru"
}

// one method to access object== course.coursetutor

const{courseTutor:instruct}=course
console.log(instruct);