define(['app'],function(UniversalDesignBootstrap) {
	UniversalDesignBootstrap.module('Routers.WizardModule', function(WizardModuleRouter, UniversalDesignBootstrap, Backbone, Marionette, $, _) {
		// Marionette uses an AppRouter to drop in Controllers. Basically is Controller.method, i.e. '': 'showWizard' = Controller.showWizard
		WizardModuleRouter.Router = Marionette.AppRouter.extend({
			before: function () {
				App.startSubApp('WizardModule', {});
			},

			appRoutes:{
				'': 'showStep',
				'step/:stepNumber': 'showStep' // this should eventually change, but should for now basically serve as a forward to wizard
			}
		});

		
		var executeAction = function(action, arg) {
			UniversalDesignBootstrap.startSubApp("WizardModule");
			action(arg);
			// UniversalDesignBootstrap.execute("set:active:header", "contacts");
		};

		var API = {
			// listContacts: function(criterion){
			// 	require(["apps/contacts/list/list_controller"], function(ListController){
			// 		executeAction(ListController.listContacts, criterion);
			// 	});
			// },

			showStep: function(stepNumber){
				// Need to figure out why the UniversalDesignBoostrap.on event below isn't being triggered

				require(['../apps/wizard/controllers/index'], function(WizardController){

					UniversalDesignBootstrap.navigate('step/' + stepNumber);
					executeAction(WizardController.showStep, stepNumber);
				});
			},

			// editContact: function(id){
			// 	require(["apps/contacts/edit/edit_controller"], function(EditController){
			// 		executeAction(EditController.editContact, id);
			// 	});
			// }
		};

		// ContactManager.on("contacts:list", function(){
		//   ContactManager.navigate("contacts");
		//   API.listContacts();
		// });

		// ContactManager.on("contacts:filter", function(criterion){
		//   if(criterion){
		// 	ContactManager.navigate("contacts/filter/criterion:" + criterion);
		//   }
		//   else{
		// 	ContactManager.navigate("contacts");
		//   }
		// });

		// ContactManager.on("contact:show", function(id){
		//   ContactManager.navigate("contacts/" + id);
		//   API.showContact(id);
		// });

		// ContactManager.on("contact:edit", function(id){
		//   ContactManager.navigate("contacts/" + id + "/edit");
		//   API.editContact(id);
		// });

		UniversalDesignBootstrap.on('WizardModule:step:showStep', function(stepNumber) {
			UniversalDesignBootstrap.navigate('step/' + stepNumber);
			API.showStep(stepNumber);
		});

		UniversalDesignBootstrap.addInitializer(function() {
			new WizardModuleRouter.Router({
				controller: API
			});
		});
	});

	return UniversalDesignBootstrap.WizardModuleRouter;	
});