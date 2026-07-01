// ==UserScript==
// @name         Data Nodes Auto Downloader v3
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  DataNodes 3 aşamalı indirme (Continue -> Free Download -> Start Download)
// @match        *://*.datanodes.to/*
// @match        *://datanodes.to/*
// @grant        none
// @author       Active_7_24
// ==/UserScript==

(function() {
    'use strict';

    // İşlemlerin birbirine girmemesi için kontrol anahtarları
    let adim1Gecildi = false;
    let adim2Gecildi = false;
    let adim3Gecildi = false;

    let tiklamaDongusu = setInterval(function() {

        // 1. AŞAMA: "Continue to Download" Butonu
        if (!adim1Gecildi) {
            let ilkButon = document.getElementById('method_free');
            if (ilkButon && !ilkButon.disabled) {
                ilkButon.click();
                adim1Gecildi = true;
            }
        }

        // 2. AŞAMA: "Free Download" Butonu (Sayacı tetiklemek için)
        if (!adim2Gecildi) {
            let butonlar = document.querySelectorAll('button');
            for (let i = 0; i < butonlar.length; i++) {
                // Sadece içinde Free Download yazan mavi butonu bul
                if (butonlar[i].textContent.includes('Free Download') && !butonlar[i].disabled) {
                    butonlar[i].click();
                    adim2Gecildi = true;
                    break;
                }
            }
        }

        // 3. AŞAMA: "Start Download" Butonu (Asıl dosyayı çekmek için)
        if (!adim3Gecildi) {
            let butonlar = document.querySelectorAll('button');
            for (let i = 0; i < butonlar.length; i++) {
                // Sayaç bitip buton Start Download'a dönüştüğünde bul ve tıkla
                if (butonlar[i].textContent.includes('Start Download') && !butonlar[i].disabled) {
                    butonlar[i].click();
                    adim3Gecildi = true;
                    clearInterval(tiklamaDongusu); // Her şey bitti, arka plandaki döngüyü kapat
                    break;
                }
            }
        }

    }, 1000); // Saniyede 1 kez ekrandaki değişiklikleri kontrol eder

})();