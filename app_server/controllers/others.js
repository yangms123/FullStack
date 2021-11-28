/*GET homepage controller */

//1. create an index function
// 2. include controller code for the home page

const about = (req,res) =>{
    res.render('generic-text',{
        title: 'About Loc8r',
        content: 'This is the about page'
    }
    );
};

//3. expose the index function as a method
module.exports = {
    about
};