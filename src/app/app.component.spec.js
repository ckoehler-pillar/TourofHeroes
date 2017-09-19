"use strict";
var app_component_1 = require("./app.component");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('AppComponent', function () {
    var de;
    var de2;
    var heroIdElement;
    var heroNameElement;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        de2 = fixture.debugElement.query(platform_browser_1.By.css('h2'));
        heroIdElement = fixture.debugElement.query(platform_browser_1.By.css('div.hero_id'));
        heroNameElement = fixture.debugElement.query(platform_browser_1.By.css('div.hero_name'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should have expected <h1> text', function () {
        fixture.detectChanges();
        var h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/Tour of Heroes/i, '<h1> should say something about "Tour of Heroes"');
    });
    it('should create a hero', function () { return expect(comp.hero).toBeDefined(); });
    it('should have expected hero name in h2', function () {
        fixture.detectChanges();
        var h2 = de2.nativeElement;
        expect(h2.innerText).toMatch(/WindStorm/i, '<h2> should say something about windstorm');
    });
    it('should have heroes id in div', function () {
        fixture.detectChanges();
        var heroId = heroIdElement.nativeElement;
        expect(heroId.innerText).toMatch(/1/i, '<div> should have hero\'s id');
    });
    it('should have heroes name in div', function () {
        fixture.detectChanges();
        var heroName = heroNameElement.nativeElement;
        expect(heroName.innerText).toMatch(/windstorm/i, '<div> should have hero\'s id');
    });
});
//# sourceMappingURL=app.component.spec.js.map