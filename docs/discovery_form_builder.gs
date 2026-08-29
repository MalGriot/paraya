/**
 * Paraya Website — Discovery Questionnaire
 * Builds the full Google Form automatically.
 *
 * HOW TO USE:
 * 1. Go to https://script.google.com → New project
 * 2. Delete the placeholder code, paste this whole file in
 * 3. Click Run (▶) on buildParayaForm
 * 4. First run: it'll ask for permission — click Review Permissions,
 *    choose your account, click Advanced > Go to project (unsafe) > Allow
 *    (this warning is normal for your own scripts)
 * 5. Check the Execution log (View > Logs, or Ctrl+Enter) for the live
 *    form's edit URL and public URL
 */

function buildParayaForm() {
  const form = FormApp.create('Paraya Website — Discovery Questionnaire');
  form.setDescription('A few questions to lock scope before we start building. Answer what you can — skip anything you\'d rather discuss live.');
  form.setCollectEmail(false);

  // 1. Phase One
  form.addSectionHeaderItem()
    .setTitle('1. Phase One')
    .setHelpText('What absolutely needs to be live in v1 vs. what can wait.');

  form.addCheckboxItem()
    .setTitle('Must-have at launch')
    .setChoiceValues(['Home', 'About / Philosophy', 'Work / Portfolio', 'Six Verticals', 'Contact / Consultation Booking', 'Merch', 'Paya']);

  form.addParagraphTextItem()
    .setTitle('Anything else that must be in Phase One?');

  form.addParagraphTextItem()
    .setTitle('What can wait for a later phase?');

  // 2. Primary Audience
  form.addSectionHeaderItem()
    .setTitle('2. Primary Audience')
    .setHelpText('If we had to prioritize one audience, who is it?');

  form.addMultipleChoiceItem()
    .setTitle('Primary audience')
    .setChoiceValues(['Brands / Clients', 'Streaming / Entertainment Partners', 'CSR / Cultural Partners', 'Creative Collaborators', 'Merchandise Customers', 'Other']);

  // 3. Primary Action
  form.addSectionHeaderItem()
    .setTitle('3. Primary Action')
    .setHelpText('The #1 thing a new visitor should do.');

  form.addMultipleChoiceItem()
    .setTitle('Primary action')
    .setChoiceValues(['Book a Consultation', 'Explore the Work', 'Contact Paraya', 'Buy Merch', 'Discover Paya', 'Other']);

  // 4. Portfolio
  form.addSectionHeaderItem()
    .setTitle('4. Portfolio')
    .setHelpText('Which projects must be featured at launch? Upload whatever you have — images, film, descriptions, credits, results.');

  form.addParagraphTextItem()
    .setTitle('Projects to feature at launch');

  form.addParagraphTextItem()
    .setTitle('Links / Drive folders for anything not uploaded directly (optional)');

  // Note: Apps Script can't create file-upload questions (Google restricts
  // that item type to manual creation via the Forms UI, for Drive
  // permission reasons). Using a link field instead.
  form.addParagraphTextItem()
    .setTitle('Paste a Drive / WeTransfer / Dropbox link with files (images, film, decks, etc.)');

  // 5. Merch
  form.addSectionHeaderItem().setTitle('5. Merch');

  form.addMultipleChoiceItem()
    .setTitle('At launch, should people buy directly on Paraya.com, or be sent to an external store?')
    .setChoiceValues(['Direct on Paraya.com', 'External store']);

  form.addTextItem()
    .setTitle('If external, is the platform already decided? (name it)');

  // 6. Paya
  form.addSectionHeaderItem()
    .setTitle('6. Paya')
    .setHelpText('Confirming the logo / brand relationship.');

  form.addMultipleChoiceItem()
    .setTitle('Is the Paya portion of the logo meant to be a hidden gateway to a separate Paya site/platform, with the color change signaling that transition?')
    .setChoiceValues(['Yes', 'No', 'Something else — explain below']);

  form.addMultipleChoiceItem()
    .setTitle('For Phase One, should we design the full Paya experience, or just the transition/gateway from Paraya?')
    .setChoiceValues(['Full Paya experience', 'Just the transition / gateway', 'Not sure yet']);

  // 7. Homepage / Film
  form.addSectionHeaderItem()
    .setTitle('7. Homepage / Film')
    .setHelpText('Teaser film is targeted for late November, funding permitting.');

  form.addParagraphTextItem()
    .setTitle('What should the homepage hero be before the film is ready?');

  form.addParagraphTextItem()
    .setTitle('Do you already have a preferred image, video, campaign, or visual direction?');

  form.addParagraphTextItem()
    .setTitle('Paste a Drive / WeTransfer / Dropbox link with reference files (optional)');

  // 8. Content Ownership
  form.addSectionHeaderItem()
    .setTitle('8. Content Ownership')
    .setHelpText('Who provides and approves each of the following?');

  ['Website copy', 'Project descriptions', 'Images / video', 'Team information', 'Merchandise information']
    .forEach(function (label) {
      form.addTextItem().setTitle(label);
    });

  // 9. Technical
  form.addSectionHeaderItem()
    .setTitle('9. Technical')
    .setHelpText('Existing accounts/preferences? Leave blank and we\'ll recommend the setup.');

  ['Hosting', 'CMS', 'Analytics', 'Consultation booking tool', 'Payments / ecommerce']
    .forEach(function (label) {
      form.addTextItem().setTitle(label + ' (leave blank for "recommend for me")');
    });

  // 10. Timeline
  form.addSectionHeaderItem().setTitle('10. Timeline');

  form.addDateItem().setTitle('Target launch date');

  form.addParagraphTextItem()
    .setTitle('Any hard dates to work backward from (October merch launch, November teaser film, etc.)?');

  // Note: items are optional by default in Apps Script, so a partial
  // answer will still submit without extra config.

  Logger.log('Edit URL: ' + form.getEditUrl());
  Logger.log('Public (share) URL: ' + form.getPublishedUrl());
}
