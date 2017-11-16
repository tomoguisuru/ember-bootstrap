import Controller from '@ember/controller';

const AlertsController = Controller.extend({

  actions: {
    show_alert(message) {
      // TODO: Replace Janky alert with Bootstrap/toastr
      alert(message);
    },
  }

});

export default AlertsController;
