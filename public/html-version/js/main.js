/**
 * Doris Kindness Kitchen CIC - Pure JavaScript & jQuery Application Logic
 * Interactive navigation, mobile drawer, modals, donation calculator, and accordions
 */

$(document).ready(function () {
  // 1. Sticky Navigation on Scroll
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 20) {
      $('#mainNav').addClass('scrolled');
      $('#utilityBar').addClass('hidden-bar');
    } else {
      $('#mainNav').removeClass('scrolled');
      $('#utilityBar').removeClass('hidden-bar');
    }
  });

  // 2. Mobile Drawer Navigation
  $('#openMobileMenu').on('click', function () {
    $('#mobileDrawerOverlay').addClass('active');
    $('body').css('overflow', 'hidden');
  });

  $('#closeMobileMenu, #mobileDrawerOverlay').on('click', function (e) {
    if (e.target === this) {
      $('#mobileDrawerOverlay').removeClass('active');
      $('body').css('overflow', 'unset');
    }
  });

  // 3. Page Switching (Tab Navigation Simulation for pure HTML SPA experience)
  $('[data-page]').on('click', function (e) {
    e.preventDefault();
    const targetPage = $(this).attr('data-page');

    $('.page-section').hide();
    $('#page-' + targetPage).fadeIn(300);

    // Update active nav states
    $('.nav-link, .drawer-link').removeClass('active');
    $('[data-page="' + targetPage + '"]').addClass('active');

    // Close mobile menu if open
    $('#mobileDrawerOverlay').removeClass('active');
    $('body').css('overflow', 'unset');

    // Scroll to top smoothly
    $('html, body').animate({ scrollTop: 0 }, 400);
  });

  // 4. Accordion Toggle
  $('.accordion-header').on('click', function () {
    const parent = $(this).closest('.accordion-item');
    if (parent.hasClass('open')) {
      parent.removeClass('open');
      parent.find('.accordion-body').slideUp(200);
    } else {
      $('.accordion-item').removeClass('open');
      $('.accordion-body').slideUp(200);
      parent.addClass('open');
      parent.find('.accordion-body').slideDown(200);
    }
  });

  // 5. Donation Modal Handling
  $('[data-open-donate]').on('click', function () {
    const amt = $(this).attr('data-amount');
    if (amt) {
      $('.quick-amt-btn').removeClass('active');
      $('.quick-amt-btn[data-amt="' + amt + '"]').addClass('active');
      $('#selectedDonationVal').text('£' + amt);
      $('#donationAmtInput').val(amt);
    }
    $('#donateModal').addClass('active');
    $('body').css('overflow', 'hidden');
  });

  $('#closeDonateModal, #donateModal').on('click', function (e) {
    if (e.target === this) {
      $('#donateModal').removeClass('active');
      $('body').css('overflow', 'unset');
    }
  });

  // Quick Amount Selectors in Modal
  $('.quick-amt-btn').on('click', function () {
    $('.quick-amt-btn').removeClass('active');
    $(this).addClass('active');
    const val = $(this).attr('data-amt');
    $('#donationAmtInput').val(val);
    $('#selectedDonationVal').text('£' + val);
  });

  // Donation Form Submission
  $('#donationForm').on('submit', function (e) {
    e.preventDefault();
    const btn = $(this).find('button[type="submit"]');
    btn.text('Processing Secure Donation...').prop('disabled', true);

    setTimeout(function () {
      $('#donationForm').hide();
      $('#donationSuccessScreen').fadeIn(200);
    }, 1000);
  });

  $('#closeDonationSuccess').on('click', function () {
    $('#donateModal').removeClass('active');
    $('body').css('overflow', 'unset');
    $('#donationSuccessScreen').hide();
    $('#donationForm').show().find('button[type="submit"]').text('Donate Now').prop('disabled', false);
  });

  // 6. Volunteer Modal Handling
  $('[data-open-volunteer]').on('click', function () {
    $('#volunteerModal').addClass('active');
    $('body').css('overflow', 'hidden');
  });

  $('#closeVolunteerModal, #volunteerModal').on('click', function (e) {
    if (e.target === this) {
      $('#volunteerModal').removeClass('active');
      $('body').css('overflow', 'unset');
    }
  });

  $('#volunteerForm').on('submit', function (e) {
    e.preventDefault();
    const btn = $(this).find('button[type="submit"]');
    btn.text('Submitting Application...').prop('disabled', true);

    setTimeout(function () {
      $('#volunteerForm').hide();
      $('#volunteerSuccessScreen').fadeIn(200);
    }, 1000);
  });

  $('#closeVolunteerSuccess').on('click', function () {
    $('#volunteerModal').removeClass('active');
    $('body').css('overflow', 'unset');
    $('#volunteerSuccessScreen').hide();
    $('#volunteerForm').show().find('button[type="submit"]').text('Apply to Volunteer').prop('disabled', false);
  });

  // 7. General Contact Form
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    $(this).hide();
    $('#contactSuccessMsg').fadeIn(200);
  });

  // 8. Newsletter Form
  $('#newsletterForm').on('submit', function (e) {
    e.preventDefault();
    $(this).html('<span style="color: #E7C071; font-weight: bold;">✓ Thank you for subscribing!</span>');
  });
});
