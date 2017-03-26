/*jslint nomen:true, node:true*/

var express = require('express'),
    libmojito = require('mojito'),
    app;

app = express();

// Set the port to listen on.
app.set('port', process.env.PORT || 8666);

// Create a new Mojito instance and attach it to `app`.
// Options can be passed to `extend`.
libmojito.extend(app, {
    context: {
        environment: "development"
    }
});

// Load the built-in middleware or any middleware
// configuration specified in application.json
app.use(libmojito.middleware());



// Load routes configuration from routes.json
app.mojito.attachRoutes();

// Allow anonymyous mojit instances w/ actions to be dispatched
app.get('/:mojit/:action', libmojito.dispatch("{mojit}.{action}"));
app.get('/patient', libmojito.dispatch("patientInit.index"));
app.get('/api/patient/formRender', libmojito.dispatch("@patient.formRender"));
app.get('/patient/edit', libmojito.dispatch("patientInit.edit"));
app.get('/patient/preview', libmojito.dispatch("patientInit.preview"));
app.get('/form_builder', libmojito.dispatch("formBuilderInit.form_builder"));

app.listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port') + ' ' +
                   'in ' + app.get('env') + ' mode');
});
