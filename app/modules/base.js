define(function(require) {
    var Base = {
        name: "empty",
        loadView: function() {
            var name = this.name;
            $.get("modules/" + name + "/view.html", function(data) {
                $("#" + name + "-view").append(data);
            });
        }
    };
    return Base;
});