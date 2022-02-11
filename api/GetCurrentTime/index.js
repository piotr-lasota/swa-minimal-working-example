const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric'
};

const formatter = new Intl.DateTimeFormat('en-US', options);

module.exports = async function (context, req) {
    context.log('Function triggered');

    context.res.json({
        status: 200,
        message: `Current server time is ${formatter.format(new Date())}`
    });
}