const srbLang = document.querySelectorAll(".srb-lang");
const engLang = document.querySelectorAll(".eng-lang");

window.addEventListener("load", () => {
  const srbData = localStorage.getItem("sr");
  const engData = localStorage.getItem("en");

  if (srbData) {
    let data = JSON.parse(srbData);
    const title = document.querySelector("title");
    const description = document.querySelector('meta[name="description"]');
    const keywords = document.querySelector('meta[name="keywords"]');
    const html = document.querySelector("html");
    const home = document.querySelector(".home");
    const about = document.querySelector(".about");
    const rasp = document.querySelector(".rasp");
    const black = document.querySelector(".black");
    const agrr = document.querySelector(".agrr");
    const contact = document.querySelector(".cont");
    const homeM = document.querySelector(".home-m");
    const aboutM = document.querySelector(".about-m");
    const raspM = document.querySelector(".rasp-m");
    const blackM = document.querySelector(".black-m");
    const agrrM = document.querySelector(".agrr-m");
    const constactM = document.querySelector(".contact-m");
    const headingTxt = document.querySelector(".heading-txt");
    const headingBtn = document.querySelector(".heading-btn");
    const knowUs = document.querySelector(".know-us");
    const knowUsTxt = document.querySelector(".know-us-txt");
    const storage = document.querySelector(".storage");
    const storageTxt = document.querySelector(".storage-txt");
    const quality = document.querySelector(".quality-h3");
    const qualityTxt = document.querySelector(".quality-txt");
    const industry = document.querySelector(".industry-h3");
    const industryTxt = document.querySelector(".industry-txt");
    const goals = document.querySelector(".goals-h3");
    const goalsTxt = document.querySelector(".goals-txt");
    const raspHeader = document.querySelector(".rasp-h2");
    const raspTxt = document.querySelector(".rasp-txt");
    const raspBtn = document.querySelector(".raspberry-btn");
    const raspContact = document.querySelector(".rasp-contact");
    const blackHeading = document.querySelectorAll(".black");
    const bbTxt = document.querySelector(".bb-txt");
    const bbBtn = document.querySelector(".blackberry-btn");
    const aggHeading = document.querySelectorAll(".agg");
    const apTxt = document.querySelector(".ap-txt");
    const pharmacyBtn = document.querySelector(".pharmacy-btn");
    const contactHeading = document.querySelector(".contact-h2");
    const contactSub = document.querySelector(".substring-cont");
    const instaTxt = document.querySelector(".insta-txt");
    const emailBtn = document.querySelector(".email-btn");
    const footerTxt = document.querySelector(".footer-txt");

    /**navigation and head */
    html.setAttribute("lang", "sr");
    home.innerText = data.home_desk.sr;
    about.innerText = data.about_desk.sr;
    rasp.innerText = data.raspberries_desk.sr;
    black.innerText = data.blackberries_desk.sr;
    agrr.innerText = data.aggr_desk.sr;
    contact.innerText = data.contact_desk.sr;
    homeM.innerText = data.home_mob.sr;
    aboutM.innerText = data.about_mob.sr;
    raspM.innerText = data.raspberries_mob.sr;
    blackM.innerText = data.blackberries_mob.sr;
    agrrM.innerText = data.aggr_mob.sr;
    constactM.innerText = data.contact_mob.sr;
    title.innerText = data.title_index.sr;
    description.setAttribute("content", data.description_index.sr);
    keywords.setAttribute("content", data.keywords_index.sr);
    /**about section */
    headingTxt.innerText = data.heading_txt.sr;
    headingBtn.innerText = data.heading_btn.sr;
    knowUs.innerText = data.know_us.sr;
    knowUsTxt.innerText = data.know_us_txt.sr;
    storage.innerText = data.storage.sr;
    storageTxt.innerText = data.storage_txt.sr;
    quality.innerText = data.quality.sr;
    qualityTxt.innerText = data.quality_txt.sr;
    industry.innerText = data.industry.sr;
    industryTxt.innerText = data.industry_txt.sr;
    goals.innerText = data.goals.sr;
    goalsTxt.innerText = data.goals_txt.sr;
    raspHeader.innerText = data.rasp_h2.sr;
    raspTxt.innerText = data.rasp_txt.sr;
    raspBtn.innerText = data.rasp_btn.sr;
    raspContact.innerText = data.rasp_contact.sr;
    blackHeading.forEach((heading) => {
      heading.innerText = data.bb_h2.sr;
    });
    bbTxt.innerText = data.bb_txt.sr;
    bbBtn.innerText = data.bb_btn.sr;
    aggHeading.forEach((heading) => {
      heading.innerText = data.agg_h2.sr;
    });
    apTxt.innerText = data.ap_txt.sr;
    pharmacyBtn.innerText = data.ap_btn.sr;
    contactHeading.innerText = data.contact_h2.sr;
    contactSub.innerText = data.contact_sub.sr;
    instaTxt.innerText = data.insta_txt.sr;
    emailBtn.innerText = data.email_btn.sr;
    footerTxt.innerText = data.footer_txt.sr;
  } else {
    data = JSON.parse(engData);

    /**navigation and head */
    html.setAttribute("lang", "en");
    home.innerText = data.home_desk.en;
    about.innerText = data.about_desk.en;
    rasp.innerText = data.raspberries_desk.en;
    black.innerText = data.blackberries_desk.en;
    agrr.innerText = data.aggr_desk.en;
    contact.innerText = data.contact_desk.en;
    homeM.innerText = data.home_mob.en;
    aboutM.innerText = data.about_mob.en;
    raspM.innerText = data.raspberries_mob.en;
    blackM.innerText = data.blackberries_mob.en;
    agrrM.innerText = data.aggr_mob.en;
    constactM.innerText = data.contact_mob.en;
    title.innerText = data.title_index.en;
    description.setAttribute("content", data.description_index.en);
    keywords.setAttribute("content", data.keywords_index.en);
    /**about section */
    headingTxt.innerText = data.heading_txt.en;
    headingBtn.innerText = data.heading_btn.en;
    knowUs.innerText = data.know_us.en;
    knowUsTxt.innerText = data.know_us_txt.en;
    storage.innerText = data.storage.en;
    storageTxt.innerText = data.storage_txt.en;
    quality.innerText = data.quality.en;
    qualityTxt.innerText = data.quality_txt.en;
    industry.innerText = data.industry.en;
    industryTxt.innerText = data.industry_txt.en;
    goals.innerText = data.goals.en;
    goalsTxt.innerText = data.goals_txt.en;
    raspHeader.innerText = data.rasp_h2.en;
    raspTxt.innerText = data.rasp_txt.en;
    raspBtn.innerText = data.rasp_btn.en;
    raspContact.innerText = data.rasp_contact.en;
    blackHeading.forEach((heading) => {
      heading.innerText = data.bb_h2.en;
    });
    bbTxt.innerText = data.bb_txt.en;
    bbBtn.innerText = data.bb_btn.en;
    aggHeading.forEach((heading) => {
      heading.innerText = data.agg_h2.en;
    });
    apTxt.innerText = data.ap_txt.en;
    pharmacyBtn.innerText = data.ap_btn.en;
    contactHeading.innerText = data.contact_h2.en;
    contactSub.innerText = data.contact_sub.en;
    instaTxt.innerText = data.insta_txt.en;
    emailBtn.innerText = data.email_btn.en;
    footerTxt.innerText = data.footer_txt.en;
  }
});

srbLang.forEach((btn) => {
  btn.addEventListener("click", () => {
    fetch("translate.json")
      .then((response) => response.json())
      .then((serbianData) => {
        const title = document.querySelector("title");
        const description = document.querySelector('meta[name="description"]');
        const keywords = document.querySelector('meta[name="keywords"]');
        const html = document.querySelector("html");
        const home = document.querySelector(".home");
        const about = document.querySelector(".about");
        const rasp = document.querySelector(".rasp");
        const black = document.querySelector(".black");
        const agrr = document.querySelector(".agrr");
        const contact = document.querySelector(".cont");
        const homeM = document.querySelector(".home-m");
        const aboutM = document.querySelector(".about-m");
        const raspM = document.querySelector(".rasp-m");
        const blackM = document.querySelector(".black-m");
        const agrrM = document.querySelector(".agrr-m");
        const constactM = document.querySelector(".contact-m");
        const headingTxt = document.querySelector(".heading-txt");
        const headingBtn = document.querySelector(".heading-btn");
        const knowUs = document.querySelector(".know-us");
        const knowUsTxt = document.querySelector(".know-us-txt");
        const storage = document.querySelector(".storage");
        const storageTxt = document.querySelector(".storage-txt");
        const quality = document.querySelector(".quality-h3");
        const qualityTxt = document.querySelector(".quality-txt");
        const industry = document.querySelector(".industry-h3");
        const industryTxt = document.querySelector(".industry-txt");
        const goals = document.querySelector(".goals-h3");
        const goalsTxt = document.querySelector(".goals-txt");
        const raspHeader = document.querySelector(".rasp-h2");
        const raspTxt = document.querySelector(".rasp-txt");
        const raspBtn = document.querySelector(".raspberry-btn");
        const raspContact = document.querySelector(".rasp-contact");
        const blackHeading = document.querySelectorAll(".black");
        const bbTxt = document.querySelector(".bb-txt");
        const bbBtn = document.querySelector(".blackberry-btn");
        const aggHeading = document.querySelectorAll(".agg");
        const apTxt = document.querySelector(".ap-txt");
        const pharmacyBtn = document.querySelector(".pharmacy-btn");
        const contactHeading = document.querySelector(".contact-h2");
        const contactSub = document.querySelector(".substring-cont");
        const instaTxt = document.querySelector(".insta-txt");
        const emailBtn = document.querySelector(".email-btn");
        const footerTxt = document.querySelector(".footer-txt");

        /**navigation and head */
        html.setAttribute("lang", "sr");
        home.innerText = serbianData.home_desk.sr;
        about.innerText = serbianData.about_desk.sr;
        rasp.innerText = serbianData.raspberries_desk.sr;
        black.innerText = serbianData.blackberries_desk.sr;
        agrr.innerText = serbianData.aggr_desk.sr;
        contact.innerText = serbianData.contact_desk.sr;
        homeM.innerText = serbianData.home_mob.sr;
        aboutM.innerText = serbianData.about_mob.sr;
        raspM.innerText = serbianData.raspberries_mob.sr;
        blackM.innerText = serbianData.blackberries_mob.sr;
        agrrM.innerText = serbianData.aggr_mob.sr;
        constactM.innerText = serbianData.contact_mob.sr;
        title.innerText = serbianData.title_index.sr;
        description.setAttribute("content", serbianData.description_index.sr);
        keywords.setAttribute("content", serbianData.keywords_index.sr);
        /**about section */
        headingTxt.innerText = serbianData.heading_txt.sr;
        headingBtn.innerText = serbianData.heading_btn.sr;
        knowUs.innerText = serbianData.know_us.sr;
        knowUsTxt.innerText = serbianData.know_us_txt.sr;
        storage.innerText = serbianData.storage.sr;
        storageTxt.innerText = serbianData.storage_txt.sr;
        quality.innerText = serbianData.quality.sr;
        qualityTxt.innerText = serbianData.quality_txt.sr;
        industry.innerText = serbianData.industry.sr;
        industryTxt.innerText = serbianData.industry_txt.sr;
        goals.innerText = serbianData.goals.sr;
        goalsTxt.innerText = serbianData.goals_txt.sr;
        raspHeader.innerText = serbianData.rasp_h2.sr;
        raspTxt.innerText = serbianData.rasp_txt.sr;
        raspBtn.innerText = serbianData.rasp_btn.sr;
        raspContact.innerText = serbianData.rasp_contact.sr;
        blackHeading.forEach((heading) => {
          heading.innerText = serbianData.bb_h2.sr;
        });
        bbTxt.innerText = serbianData.bb_txt.sr;
        bbBtn.innerText = serbianData.bb_btn.sr;
        aggHeading.forEach((heading) => {
          heading.innerText = serbianData.agg_h2.sr;
        });
        apTxt.innerText = serbianData.ap_txt.sr;
        pharmacyBtn.innerText = serbianData.ap_btn.sr;
        contactHeading.innerText = serbianData.contact_h2.sr;
        contactSub.innerText = serbianData.contact_sub.sr;
        instaTxt.innerText = serbianData.insta_txt.sr;
        emailBtn.innerText = serbianData.email_btn.sr;
        footerTxt.innerText = serbianData.footer_txt.sr;
        localStorage.removeItem("en");
        localStorage.setItem("sr", JSON.stringify(serbianData));
      });
  });
});

engLang.forEach((btn) => {
  btn.addEventListener("click", () => {
    fetch("translate.json")
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector("title");
        const description = document.querySelector('meta[name="description"]');
        const keywords = document.querySelector('meta[name="keywords"]');
        const html = document.querySelector("html");
        const home = document.querySelector(".home");
        const about = document.querySelector(".about");
        const rasp = document.querySelector(".rasp");
        const black = document.querySelector(".black");
        const agrr = document.querySelector(".agrr");
        const contact = document.querySelector(".cont");
        const homeM = document.querySelector(".home-m");
        const aboutM = document.querySelector(".about-m");
        const raspM = document.querySelector(".rasp-m");
        const blackM = document.querySelector(".black-m");
        const agrrM = document.querySelector(".agrr-m");
        const constactM = document.querySelector(".contact-m");
        const headingTxt = document.querySelector(".heading-txt");
        const headingBtn = document.querySelector(".heading-btn");
        const knowUs = document.querySelector(".know-us");
        const knowUsTxt = document.querySelector(".know-us-txt");
        const storage = document.querySelector(".storage");
        const storageTxt = document.querySelector(".storage-txt");
        const quality = document.querySelector(".quality-h3");
        const qualityTxt = document.querySelector(".quality-txt");
        const industry = document.querySelector(".industry-h3");
        const industryTxt = document.querySelector(".industry-txt");
        const goals = document.querySelector(".goals-h3");
        const goalsTxt = document.querySelector(".goals-txt");
        const raspHeader = document.querySelector(".rasp-h2");
        const raspTxt = document.querySelector(".rasp-txt");
        const raspBtn = document.querySelector(".raspberry-btn");
        const raspContact = document.querySelector(".rasp-contact");
        const blackHeading = document.querySelectorAll(".black");
        const bbTxt = document.querySelector(".bb-txt");
        const bbBtn = document.querySelector(".blackberry-btn");
        const aggHeading = document.querySelectorAll(".agg");
        const apTxt = document.querySelector(".ap-txt");
        const pharmacyBtn = document.querySelector(".pharmacy-btn");
        const contactHeading = document.querySelector(".contact-h2");
        const contactSub = document.querySelector(".substring-cont");
        const instaTxt = document.querySelector(".insta-txt");
        const emailBtn = document.querySelector(".email-btn");
        const footerTxt = document.querySelector(".footer-txt");

        /**navigation and head */
        html.setAttribute("lang", "en");
        home.innerText = data.home_desk.en;
        about.innerText = data.about_desk.en;
        rasp.innerText = data.raspberries_desk.en;
        black.innerText = data.blackberries_desk.en;
        agrr.innerText = data.aggr_desk.en;
        contact.innerText = data.contact_desk.en;
        homeM.innerText = data.home_mob.en;
        aboutM.innerText = data.about_mob.en;
        raspM.innerText = data.raspberries_mob.en;
        blackM.innerText = data.blackberries_mob.en;
        agrrM.innerText = data.aggr_mob.en;
        constactM.innerText = data.contact_mob.en;
        title.innerText = data.title_index.en;
        description.setAttribute("content", data.description_index.en);
        keywords.setAttribute("content", data.keywords_index.en);
        /**about section */
        headingTxt.innerText = data.heading_txt.en;
        headingBtn.innerText = data.heading_btn.en;
        knowUs.innerText = data.know_us.en;
        knowUsTxt.innerText = data.know_us_txt.en;
        storage.innerText = data.storage.en;
        storageTxt.innerText = data.storage_txt.en;
        quality.innerText = data.quality.en;
        qualityTxt.innerText = data.quality_txt.en;
        industry.innerText = data.industry.en;
        industryTxt.innerText = data.industry_txt.en;
        goals.innerText = data.goals.en;
        goalsTxt.innerText = data.goals_txt.en;
        raspHeader.innerText = data.rasp_h2.en;
        raspTxt.innerText = data.rasp_txt.en;
        raspBtn.innerText = data.rasp_btn.en;
        raspContact.innerText = data.rasp_contact.en;
        blackHeading.forEach((heading) => {
          heading.innerText = data.bb_h2.en;
        });
        bbTxt.innerText = data.bb_txt.en;
        bbBtn.innerText = data.bb_btn.en;
        aggHeading.forEach((heading) => {
          heading.innerText = data.agg_h2.en;
        });
        apTxt.innerText = data.ap_txt.en;
        pharmacyBtn.innerText = data.ap_btn.en;
        contactHeading.innerText = data.contact_h2.en;
        contactSub.innerText = data.contact_sub.en;
        instaTxt.innerText = data.insta_txt.en;
        emailBtn.innerText = data.email_btn.en;
        footerTxt.innerText = data.footer_txt.en;
        localStorage.removeItem("sr");
        localStorage.setItem("en", JSON.stringify(data));
      });
  });
});
