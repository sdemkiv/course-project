var DeanerySystem;
(function (DeanerySystem) {
    var ClientSide;
    (function (ClientSide) {
        var Common;
        (function (Common) {
            var Utilities;
            (function (Utilities) {
                var QueryString = (function () {
                    function QueryString() {
                    }
                    QueryString.GetQueryString = function () {
                        return window.location.href;
                    };
                    return QueryString;
                }());
                Utilities.QueryString = QueryString;
            })(Utilities = Common.Utilities || (Common.Utilities = {}));
        })(Common = ClientSide.Common || (ClientSide.Common = {}));
    })(ClientSide = DeanerySystem.ClientSide || (DeanerySystem.ClientSide = {}));
})(DeanerySystem || (DeanerySystem = {}));
var DeanerySystem;
(function (DeanerySystem) {
    var ClientSide;
    (function (ClientSide) {
        var Cabinet;
        (function (Cabinet) {
            var QueryString = ClientSide.Common.Utilities.QueryString;
            var Initializer = (function () {
                function Initializer(Color) {
                    this.Color = Color;
                }
                Initializer.prototype.Initialize = function () {
                    var _this = this;
                    var url = QueryString.GetQueryString();
                    var divs = jQuery("div");
                    divs.each(function (index, element) {
                        jQuery(element).css("background-color", _this.Color);
                    });
                    console.log(url);
                    var contact = new Cabinet.ContactInfo();
                    var vm = new Cabinet.ContactInfoVM(contact);
                    var elemet = $("#contactform")[0];
                    ko.applyBindings(vm, elemet);
                    alert("initialzied");
                };
                return Initializer;
            }());
            Cabinet.Initializer = Initializer;
        })(Cabinet = ClientSide.Cabinet || (ClientSide.Cabinet = {}));
    })(ClientSide = DeanerySystem.ClientSide || (DeanerySystem.ClientSide = {}));
})(DeanerySystem || (DeanerySystem = {}));
jQuery(document)
    .ready(function () {
    var initializer = new DeanerySystem.ClientSide.Cabinet.Initializer("gray");
    initializer.Initialize();
});
var DeanerySystem;
(function (DeanerySystem) {
    var ClientSide;
    (function (ClientSide) {
        var Cabinet;
        (function (Cabinet) {
            var Adress = (function () {
                function Adress(City, Country) {
                    this.City = City;
                    this.Country = Country;
                }
                return Adress;
            }());
            Cabinet.Adress = Adress;
        })(Cabinet = ClientSide.Cabinet || (ClientSide.Cabinet = {}));
    })(ClientSide = DeanerySystem.ClientSide || (DeanerySystem.ClientSide = {}));
})(DeanerySystem || (DeanerySystem = {}));
var DeanerySystem;
(function (DeanerySystem) {
    var ClientSide;
    (function (ClientSide) {
        var Cabinet;
        (function (Cabinet) {
            var ContactInfo = (function () {
                function ContactInfo() {
                    this.FirstName = "John";
                    this.LastName = "Connor";
                    this.Age = 25;
                    this.Adresses = [new Cabinet.Adress("Lviv", "Ukraine"), new Cabinet.Adress("NY", "USA")];
                }
                return ContactInfo;
            }());
            Cabinet.ContactInfo = ContactInfo;
        })(Cabinet = ClientSide.Cabinet || (ClientSide.Cabinet = {}));
    })(ClientSide = DeanerySystem.ClientSide || (DeanerySystem.ClientSide = {}));
})(DeanerySystem || (DeanerySystem = {}));
var DeanerySystem;
(function (DeanerySystem) {
    var ClientSide;
    (function (ClientSide) {
        var Cabinet;
        (function (Cabinet) {
            var AdressVM = (function () {
                function AdressVM(adressModel) {
                    var _this = this;
                    this.City = ko.observable(adressModel.City);
                    this.Country = ko.observable(adressModel.Country);
                    this.ZIP = ko.computed(function () {
                        var zip = (_this.City.length + _this.Country.length) * new Date().getMilliseconds();
                        return zip.toString();
                    });
                }
                AdressVM.prototype.SayHi = function () {
                    alert("Hello Mia!");
                };
                return AdressVM;
            }());
            Cabinet.AdressVM = AdressVM;
        })(Cabinet = ClientSide.Cabinet || (ClientSide.Cabinet = {}));
    })(ClientSide = DeanerySystem.ClientSide || (DeanerySystem.ClientSide = {}));
})(DeanerySystem || (DeanerySystem = {}));
var DeanerySystem;
(function (DeanerySystem) {
    var ClientSide;
    (function (ClientSide) {
        var Cabinet;
        (function (Cabinet) {
            var ContactInfoVM = (function () {
                function ContactInfoVM(contactInfo) {
                    this.Age = ko.observable(null);
                    this.FirstName = ko.observable(contactInfo.FirstName);
                    this.LastName = ko.observable(contactInfo.LastName);
                    var adressVMs = [];
                    contactInfo.Adresses.forEach(function (x) {
                        adressVMs.push(new Cabinet.AdressVM(x));
                    });
                    this.AdressVMs = ko.observableArray(adressVMs);
                    this.TextColor = ko.observable("black");
                    this.Initialize();
                    this.Age(contactInfo.Age);
                }
                ContactInfoVM.prototype.Initialize = function () {
                    var _this = this;
                    this.Age.subscribe(function (val) {
                        if (val > 21) {
                            _this.TextColor("green");
                        }
                        else if (val > 18) {
                            _this.TextColor("yellow");
                        }
                        else {
                            _this.TextColor("red");
                        }
                    });
                };
                return ContactInfoVM;
            }());
            Cabinet.ContactInfoVM = ContactInfoVM;
        })(Cabinet = ClientSide.Cabinet || (ClientSide.Cabinet = {}));
    })(ClientSide = DeanerySystem.ClientSide || (DeanerySystem.ClientSide = {}));
})(DeanerySystem || (DeanerySystem = {}));
