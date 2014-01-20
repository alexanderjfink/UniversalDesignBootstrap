define(['vent'], function (vent) {

  return {
    setFilter : function(param) {
      vent.trigger('todoList:filter', param.trim() || '');
    }
  };

});