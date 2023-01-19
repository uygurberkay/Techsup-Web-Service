import React from 'react';
import './Account.css';

function Account() {
  return (
    <div className='user-forms'>
        <div className='form-selection'>
            <h1 class="ty-text ty-color-orange ty-font-header-sm ty-font-w-bold">Üyelik Bilgilerim</h1>
            
                <div class="ty-display-flex ty-flex-row ty-form-group form-group-stretched">
                <div class="ty-display-flex ty-color-black ty-font-md ty-flex-column ty-input-w">
                <label class="ty-text ty-color-black ty-font-sm ty-font-w-bold ty-mgb-1">
                    Ad
                </label>
                <input name="firstname" autocomplete="off" class="ty-bg-beige ty-input ty-textbox ty-bordered ty-input-large" value="Berkay"/>
                <div class="ty-display-flex ty-mgt-1">
                <span class="ty-text ty-color-black ty-font-sm ty-font-w-bold">
                </span>
                <span class="ty-text ty-color-soft-gray ty-font-sm ty-mgl-auto">
                </span>
                </div>
                </div>
                <div class="ty-display-flex ty-color-black ty-font-md ty-flex-column ty-input-w">
                <label class="ty-text ty-color-black ty-font-sm ty-font-w-bold ty-mgb-1">
                    Soyad
                </label>
                <input name="lastname" autocomplete="off" class="ty-bg-beige ty-input ty-textbox ty-bordered ty-input-large" value="Uygur"/>
                <div class="ty-display-flex ty-mgt-1">
                <span class="ty-text ty-color-black ty-font-sm ty-font-w-bold">
                </span>
                <span class="ty-text ty-color-soft-gray ty-font-sm ty-mgl-auto">
                </span>
                </div>
                </div>
                </div>
                <div class="ty-display-flex ty-flex-row ty-form-group form-group-stretched">
                <div class="ty-display-flex ty-color-black ty-font-md ty-flex-column ty-input-w">
                <label class="ty-text ty-color-black ty-font-sm ty-font-w-bold ty-mgb-1">
                    E-Mail
                </label>
                <input name="email" autocomplete="off" class="ty-bg-beige ty-input ty-textbox ty-bordered ty-input-large" value="uygurberkay@icloud.com"/>
                <div class="ty-display-flex ty-mgt-1">
                <span class="ty-text ty-color-black ty-font-sm ty-font-w-bold">
                </span>
                <span class="ty-text ty-color-soft-gray ty-font-sm ty-mgl-auto">
                </span>
                </div>
                </div>
                </div>
                
                <div name="phonecode" tabindex="-1" class="ty-display-flex ty-bg-beige ty-relative ty-input ty-select ty-bordered ty-transition ty-input-large">
                <span class="ty-text ty-color-dark-gray ty-font-sm">
                    +90
                </span>
                <svg class="ty-arrow" viewBox="0 0 32 32" width="18px" height="18px" aria-hidden="true">
                <path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z">
                </path>
                </svg>
                <div tabindex="0" class="ty-display-flex ty-flex-column ty-absolute ty-select-options ty-scrollbar ty-bordered-focus"><div cla
                ss="ty-select-option">
               
                </div>
                </div>
        </div>
        <h1>
            Kullanıcı Bilgileri
        </h1>
    </div>
    </div>
  )
}

export default Account