        let campaignOverlay = document.createElement('div');
        let mycampaign = document.createElement('div');
        let leadImageElement = document.createElement('img');
        let leadForm = document.createElement('div');
        let leadHeader = document.createElement('p');
        let leadDesc = document.createElement('p');
        let emailInput = document.createElement('input');
        let phoneInput = document.createElement('input');
        let submitButton = document.createElement('button');
        let gdprInput = document.createElement('input');
        let gdprText = document.createElement('a');
        let myCloseButton = document.createElement('button');
        var screenWidth = window.innerWidth;

        function checkDeviceType (){  

            if (screenWidth>=1024){
            return 'desktop';
            }
            else if (screenWidth<1024 && screenWidth>=768){
            return 'tablet';
            }
            else {
            return 'mobile';
            }
        }

        var deviceType = checkDeviceType();
        document.body.appendChild(campaignOverlay);
        document.body.appendChild(mycampaign);
        mycampaign.appendChild(leadImageElement);
        mycampaign.appendChild(leadForm);
        leadForm.appendChild(myCloseButton);
        leadForm.appendChild(leadHeader);
        leadForm.appendChild(leadDesc);
        leadForm.appendChild(emailInput);
        leadForm.appendChild(phoneInput);
        leadForm.appendChild(submitButton);
        leadForm.appendChild(gdprInput);
        leadForm.appendChild(gdprText);

        leadImageElement.src = 'https://4.bp.blogspot.com/-s_iVgKrOhqU/TYJTJ6Gwn3I/AAAAAAAACpM/KndvPrivhKY/w1200-h630-p-k-no-nu/HOKUSA_1831_Great_Wave_off_Kanagawa.jpg'
        myCloseButton.textContent = "x";
        emailInput.type = 'email';
        emailInput.placeholder = "Email";
        phoneInput.type = 'tel';
        phoneInput.placeholder = "Phone number";
        gdprInput.type = 'checkbox';
        leadHeader.textContent = "Join us for a discount!";
        leadDesc.textContent = "Would you like to subscribe to our newsletter?";
        submitButton.textContent = "Confirm";
        gdprText.textContent = "By submitting this form, you are giving consent for your email to be used."
        campaignOverlay.style.cssText = "position:fixed; top:0; left:0; height:100%; width:100%; background-color: rgba(0,0,0,0.75); z-index:9000";

        gdprText.addEventListener('click', function(event){
            event.preventDefault()
            window.open('https://en.wikipedia.org/wiki/General_Data_Protection_Regulation', '_blank')
        })
        
        if (deviceType == 'desktop'){
            mycampaign.style.cssText = "position:fixed; display:flex;flex-wrap:wrap; top:30%; left:30%; height:40%; width:40%; background-color: white; z-index:10000";
            leadImageElement.style.cssText = "position:absolute; align-self:left; width:50%; height:100%; background-color:black;";
            myCloseButton.style.cssText = "display:flex;border-color:white;width:20px; height:20px; border-radius:50%; color:black ;background-color:white;align-items:center; justify-content:center;margin-left:auto"
            leadForm.style.cssText = "position:absolute; display:flex;flex-wrap:wrap; width:50%; height:100%; left:50%; padding:2%";
            leadHeader.style.cssText = "position:relative; text-align:center; margin-top:15%; font-size:20px;width:100%";
            leadDesc.style.cssText = "position:relative; height:15px; font-size:14px; text-align:center;width:100%";
            emailInput.style.cssText = "width:100%;margin:3px";
            phoneInput.style.cssText = "width:100%;margin:3px";
            submitButton.style.cssText = "position:relative; background:black; color:white; border-radius:8px; border-style:none;box-sizing:border-box;display:inline-block;height:40px;text-align:center; top:2%;width:100%";
            gdprInput.style.cssText = "position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;top:1%;left:2%;margin-bottom:auto;"
            gdprText.style.cssText = "font-size:12px;width:90%;margin-left:auto;";

        }
        else if (deviceType == 'mobile'){
            mycampaign.style.cssText = "position:fixed; display:flex; flex-wrap:wrap; top:30%; left:12%; height:50%; width:80%; background-color: white; z-index:10000";
            myCloseButton.style.cssText = "display:flex;border-color:white;width:20px; height:20px; border-radius:50%; color:black ;background-color:white;align-items:center; justify-content:center;margin-left:auto"
            leadImageElement.style.cssText = "position:absolute; align-self:left; width:50%; height:100%; background-color:black;";
            leadForm.style.cssText = "position:absolute;display:flex;flex-wrap:wrap;width:50%; height:100%; left:50%";
            leadHeader.style.cssText = "position:relative; text-align:center; margin-top:15%; font-size:18px";
            leadDesc.style.cssText = "position:relative; font-size:12px; text-align:center";
            emailInput.style.cssText = "width:100%;margin:5px";
            phoneInput.style.cssText = "width:100%;margin:5px";
            submitButton.style.cssText = "position:relative; background:black; color:white; border-radius:8px; border-style:none;box-sizing:border-box;display:inline-block;height:40px;text-align:center; top:2%;width:100%";
            gdprInput.style.cssText = "position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;top:1%;left:2%;margin-bottom:auto;"
            gdprText.style.cssText = "font-size:12px;width:90%;margin-left:auto;";
        }
        else {
            mycampaign.style.cssText = "position:fixed; display:flex;flex-wrap:wrap; top:30%; left:11%; height:40%; width:80%; background-color: white; z-index:10000";
            myCloseButton.style.cssText = "display:flex;border-color:white;width:20px; height:20px; border-radius:50%; color:black ;background-color:white;align-items:center; justify-content:center;margin-left:auto"
            leadImageElement.style.cssText = "position:absolute; align-self:left; width:50%; height:100%; background-color:black;";
            leadForm.style.cssText = "position:absolute; display:flex;flex-wrap:wrap; width:50%; height:100%; left:50%; padding:2%";
            leadHeader.style.cssText = "position:relative; text-align:center; font-size:18px;width:100%";
            leadDesc.style.cssText = "position:relative; font-size:12px; text-align:center;width:100%";
            emailInput.style.cssText = "width:100%;margin:8px";
            phoneInput.style.cssText = "width:100%;margin:8px";
            submitButton.style.cssText = "position:relative; background:black; color:white; border-radius:8px; border-style:none;box-sizing:border-box;display:inline-block;height:40px;text-align:center; top:2%;width:100%";
            gdprInput.style.cssText = "position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;top:1%;left:2%;margin-bottom:auto;"
            gdprText.style.cssText = "font-size:12px;width:90%;margin-left:auto;";
        }
        let emailData = null;
        let phoneData = null;
        let gdprData = false;
        let myCouponCode = null;

        emailInput.addEventListener('input', function(){
            if (emailValid(this.value)){
                this.style.border = '1px solid black';
                emailData = this.value;

            }
            else {
                this.style.border = '1px solid red';
                emailData = null;
            }
        })
        phoneInput.addEventListener('input', function(){
            if (phoneValid(this.value)){
                this.style.border = '1px solid black';
                phoneData = this.value;
                
            }
            else {
                this.style.border = '1px solid red';
                phoneData = null;
            }
        })
        gdprInput.addEventListener('click', function(){
            if (this.checked){
                return gdprData = true;
            }
            else {
                return gdprData = false;
            }
        })

        function closeCampaign(){

            campaignOverlay.style.display = 'none';
            mycampaign.style.display = 'none';
            console.log("Campaign closed!");
        }

        campaignOverlay.addEventListener('click', function(){
            closeCampaign();
        })
        myCloseButton.addEventListener('click', function(){
            closeCampaign();
        })

        function emailValid(emailData){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(emailData);
            
        }

        function phoneValid(phoneData){
            const phoneRegex = /^\d{10}$/;
            return phoneRegex.test(phoneData);
        }
        console.log(emailData)
        console.log(phoneData)

        async function getCouponCode(emailData, phoneData){
            const url = 'https://opt-interview-projects.onrender.com/lead-collection';
            const data = {
                email: emailData,
                phone: phoneData
            };
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            try {
                const response = await fetch(url, options);
                const responseText = await response.text();
                const couponObject = JSON.parse(responseText);
                myCouponCode = couponObject.coupon_code;

                return myCouponCode;
            } catch (error) {
                console.error("API failed " + error);
                return null;
            }
            
        }

        submitButton.addEventListener('click', function(){

            if (emailData != null && phoneData != null && gdprData == true){
                console.log(emailData)
                console.log(phoneData)
                console.log(gdprData)
                getCouponCode(emailData, phoneData)
                .then(myCouponCode=>{
                    console.log(myCouponCode);
                    
                    
                })
                .catch(error => {
                    console.log("API failed" + error);
                })
                if (myCouponCode != null){
                    let mySuccessPage = document.createElement('div');
                    let successHeader = document.createElement('p');
                    let successDesc = document.createElement('p');
                    let couponContainer = document.createElement('div');
                    let successButton = document.createElement('button');

                    leadForm.style.cssText = "display:none";
                    
                    mycampaign.appendChild(mySuccessPage);
                    mySuccessPage.appendChild(successHeader);
                    mySuccessPage.appendChild(successDesc);
                    mySuccessPage.appendChild(couponContainer);
                    mySuccessPage.appendChild(successButton);
                    successHeader.textContent = "Amazing!";
                    successDesc.textContent = "Here is your discount code for your next purchase!";
                    couponContainer.textContent = myCouponCode;
                    successButton.textContent = "Copy";

                    successButton.addEventListener('click', function(){

                        const copiedText =couponContainer.textContent;

                        navigator.clipboard.writeText(copiedText)
                        .then(()=>{
                            console.log("Coupon copied");

                        })
                        .catch(errors =>{
                            console.log("Did not copy!", errors);   
                        })


                    });
                    
                    
                    if (deviceType == 'desktop'){
                        mySuccessPage.style.cssText = "position:absolute; display:flex;flex-wrap:wrap; width:50%; height:100%; left:50%;padding:%2";
                        successHeader.style.cssText = "position:relative; text-align:center; margin-top:15%; font-size:32px;width:100%";
                        successDesc.style.cssText = "position:relative; height:15px; font-size:14px; text-align:center;width:100%";
                        couponContainer.style.cssText = "position:relative; height:25px; font-size:14px; text-align:center;width:100%;border-style:dashed;background:whitesmoke;";
                        successButton.style.cssText = "position:relative; background:black; color:white; border-radius:8px; border-style:none;box-sizing:border-box;display:inline-block;height:40px;text-align:center; top:2%;width:100%";    
                
                    }
                    else if (deviceType == 'mobile'){
                        mySuccessPage.style.cssText = "position:absolute; display:flex;flex-wrap:wrap; width:50%; height:100%; left:50%;padding:%2";
                        successHeader.style.cssText = "position:relative; text-align:center; margin-top:15%; font-size:32px;width:100%";
                        successDesc.style.cssText = "position:relative; height:15px; font-size:14px; text-align:center;width:100%";
                        couponContainer.style.cssText = "position:relative; height:25px; font-size:14px; text-align:center;width:100%;border-style:dashed;background:whitesmoke;";
                        successButton.style.cssText = "position:relative; background:black; color:white; border-radius:8px; border-style:none;box-sizing:border-box;display:inline-block;height:40px;text-align:center; top:2%;width:100%";    
                    
                    }
                    else {
                        mySuccessPage.style.cssText = "position:absolute; display:flex;flex-wrap:wrap; width:50%; height:100%; left:50%;padding:%2";
                        successHeader.style.cssText = "position:relative; text-align:center; margin-top:15%; font-size:32px;width:100%";
                        successDesc.style.cssText = "position:relative; height:15px; font-size:14px; text-align:center;width:100%";
                        couponContainer.style.cssText = "position:relative; height:30px; font-size:14px; text-align:center;width:100%;border-style:dashed;background:whitesmoke;";
                        successButton.style.cssText = "position:relative; background:black; color:white; border-radius:8px; border-style:none;box-sizing:border-box;display:inline-block;height:40px;text-align:center; top:2%;width:100%";    
            
                    }


                }
            }
            else {
                this.style.border = '1px solid red';
            }
            })
        
