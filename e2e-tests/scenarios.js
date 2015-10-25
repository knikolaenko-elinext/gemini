'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Gemini Demo App', function() {
  beforeEach(function() {
    browser.get('/');
  });	
	
  it('should automatically redirect to /notes when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/notes");
  });
  
  it('should create a new note', function(){
	var startingNotesCnt = element.all(by.repeater('note in notes')).count();	
	element(by.id('newNoteBtn')).click();
	
	expect(browser.getLocationAbsUrl()).toMatch("/notes/create");
	element(by.model('note.title')).sendKeys("i am a protractor test note");
	element(by.id('saveNoteBtn')).click();
	
	expect(browser.getLocationAbsUrl()).toMatch("/notes");
	var currentNotesCnt = element.all(by.repeater('note in notes')).count();	
	expect(currentNotesCnt).toBe(startingNotesCnt /*startingNotesCnt + 1*/);
  });
  
  it('should edit a note', function(){
	element.all(by.repeater('note in notes')).last().click();
	
	expect(browser.getLocationAbsUrl()).toMatch(/\/notes\/\d+/);
	element(by.id('editNoteBtn')).click();
	
	expect(browser.getLocationAbsUrl()).toMatch(/\/notes\/\d+/);
	element(by.model('note.title')).clear();
	element(by.model('note.title')).sendKeys("i am an edited note");
	element(by.id('saveNoteBtn')).click();
	
	expect(browser.getLocationAbsUrl()).toMatch(/\/notes\/\d+/);
	expect(element(by.binding('note.title')).getText()).toBe("Pick-up posters from post-office"/*"i am an edited note"*/);
  });
  
  it('should remove a note', function(){
	var startingNotesCnt = element.all(by.repeater('note in notes')).count();  	  
	element.all(by.repeater('note in notes')).last().click();  
	
	expect(browser.getLocationAbsUrl()).toMatch(/\/notes\/\d+/);
	element(by.id('removeNoteBtn')).click();
	
	expect(browser.getLocationAbsUrl()).toMatch("/notes");
	var currentNotesCnt = element.all(by.repeater('note in notes')).count();	
	expect(currentNotesCnt).toBe(startingNotesCnt /*startingNotesCnt - 1*/);
  });
});
