// Cookie choices, the contact form and the map. Editors don't need to change this file.
(function () {
  'use strict';
  var script = document.currentScript;
  var analyticsId = script.getAttribute('data-analytics');
  var liveAddress = script.getAttribute('data-live');
  var storageKey = 'inspire-cookie-choice';
  var analyticsStarted = false;

  function readChoice() {
    try { return window.localStorage.getItem(storageKey); } catch (e) { return null; }
  }
  function saveChoice(choice) {
    try { window.localStorage.setItem(storageKey, choice); } catch (e) { /* the choice lasts for this page only */ }
  }
  function startAnalytics() {
    if (location.hostname !== liveAddress && location.hostname !== 'www.' + liveAddress) return;
    window['ga-disable-' + analyticsId] = false;
    if (analyticsStarted) return;
    analyticsStarted = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', analyticsId);
    var tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(analyticsId);
    document.head.appendChild(tag);
  }
  function stopAnalytics() {
    window['ga-disable-' + analyticsId] = true;
    var parts = location.hostname.split('.');
    var domains = [''];
    for (var i = 0; i < parts.length - 1; i++) domains.push('; domain=.' + parts.slice(i).join('.'));
    document.cookie.split(';').forEach(function (cookie) {
      var name = cookie.split('=')[0].trim();
      if (name.indexOf('_ga') !== 0) return;
      domains.forEach(function (domain) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + domain;
      });
    });
  }

  var banner = document.querySelector('.cookie-banner');
  var choice = readChoice();
  if (choice === 'accepted') startAnalytics();
  else if (choice !== 'declined') banner.hidden = false;

  banner.addEventListener('click', function (event) {
    var picked = event.target.getAttribute('data-cookie-choice');
    if (!picked) return;
    saveChoice(picked);
    banner.hidden = true;
    if (picked === 'accepted') startAnalytics(); else stopAnalytics();
  });
  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href="#cookie-settings"]');
    if (!link) return;
    event.preventDefault();
    banner.hidden = false;
    banner.focus();
  });

  var form = document.querySelector('.contact-form');
  if (form) {
    var status = form.querySelector('.contact-form__status');
    var send = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      send.disabled = true;
      status.hidden = true;
      fetch(form.action, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) })
        .then(function (response) { return response.json().then(function (data) { return response.ok && data.success; }); })
        .then(function (sent) {
          if (!sent) throw new Error('not sent');
          form.reset();
          status.textContent = 'Thanks, your message has been sent. We\'ll reply by email.';
        })
        .catch(function () {
          status.textContent = 'Sorry, your message didn\'t send. Please try again in a few minutes, or contact us on LinkedIn or Facebook.';
        })
        .then(function () {
          status.hidden = false;
          send.disabled = false;
        });
    });
  }

  var map = document.querySelector('.map-box');
  if (map) {
    var show = map.querySelector('.map-box__show');
    var note = map.querySelector('.map-box__note');
    show.hidden = false;
    note.hidden = false;
    show.addEventListener('click', function () {
      var frame = document.createElement('iframe');
      frame.title = 'Map of the meeting venue';
      frame.src = 'https://www.google.com/maps?output=embed&q=' + map.getAttribute('data-map-query');
      map.insertBefore(frame, map.firstChild);
      map.classList.add('is-open');
      show.hidden = true;
      note.hidden = true;
    });
  }
})();
