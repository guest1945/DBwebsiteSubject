document.getElementById('drop').ondragover = function(shortbow){
    shortbow.preventDefault();
};
document.getElementById('drop').ondrop = function(){
  
}

document.getElementById('drag').ondragstart =function() {
  document.getElementById('drop').ondrop = function(){
        if(shortbow.rarity == 0)
        { shortbow.reset();
          shortbow.evolRandomPrefix();
          shortbow.evolRandomSuffix();
          shortbow.evolcount++;
          document.getElementById('evolcount').setAttribute('value',parseInt(shortbow.evolcount));
        }
        else {console.log("노말 아이템만 사용 가능 ")}
  }
}

document.getElementById('drag1').ondragstart = function(){
  document.getElementById('drop').ondrop =function(){

  
  if(shortbow.rarity !=1){
    shortbow.deafEssence();
    shortbow.dreadcount++;
    document.getElementById('dreadcount').setAttribute('value',parseInt(shortbow.dreadcount));
  }
  else{console.log("매직 아이템에 사용 불가");}
}
}
document.getElementById('drag2').ondragstart = function(){
  document.getElementById('drop').ondrop = function(){
    if(shortbow.rarity==2){
      shortbow.exalOrb();
      shortbow.showOption();
      shortbow.exalcount++;
      document.getElementById('exalcount').setAttribute('value',parseInt(shortbow.exalcount));
    }
    else {console.log("레어 아이템만 사용 가능");}
  }
}
document.getElementById('drag3').ondragstart =function(){
  document.getElementById('drop').ondrop =function(){
    if(shortbow.rarity!=0){
      shortbow.reset();
      shortbow.showOption();
    }
    else {console.log("노말 아이템은 사용 불가");}
  }
}
document.getElementById('drag4').ondragstart =function(){
  document.getElementById('drop').ondrop =function(){
    if(shortbow.rarity!=0){
      shortbow.annOrb();
      shortbow.showOption();
      shortbow.annulcount++;
      document.getElementById('annulcount').setAttribute('value',parseInt(shortbow.annulcount));
    }
    else {console.log("노말 아이템은 사용 불가");}
  }
}

let prefix = ['접두1','접두2','접두3','접두4','접두5'];
let suffix = ['접미1','접미2','접미3','접미4','접미5'];
let blankChk = [0,0,0,0,0,0];

let shortbow = {
  rarity : 0,
  option:{prefix1 : 'x',
  prefix2 : 'x',
  prefix3 : 'x',
  suffix1 : 'x',
  suffix2 : 'x',
  suffix3 : 'x',},
  OptionNum : 0,
  evolcount :0,
  exalcount :0,
  annulcount:0,
  dreadcount:0,
  exalOrb : function(){
    shortbow.reset();
    //접두
    this.OptionNum = Math.floor(Math.random()*4);
    console.log(this.OptionNum);
    this.option[0] =prefix[Math.floor(Math.random()*5)];

    if(this.OptionNum==0||this.OptionNum==1)console.log(this.OptionNum);
    else if(this.OptionNum==2){
      
        do{
          this.option[1] =prefix[Math.floor(Math.random()*5)];
        } while(shortbow.dupCheckPre(this.option[1])!=0);
      }
    else if(this.OptionNum ==3)
    {
      
      console.log(this.prefix1);
      do{
        this.option[1] = prefix[Math.floor(Math.random()*5)];
      } while(shortbow.dupCheckPre(this.option[1])!=0);
      do{
        this.option[2] = prefix[Math.floor(Math.random()*5)];
      } while(shortbow.dupCheckPre(this.option[2])!=0);
    }
    this.OptionNum =Math.floor(Math.random()*4);
    console.log(this.OptionNum);
    //접미 
    this.option[3] = suffix[Math.floor(Math.random()*5)];
    if(this.OptionNum==0||this.OptionNum==1)console.log(this.OptionNum);
    else if(this.OptionNum==2) {
      
        do{
          this.option[4] =suffix[Math.floor(Math.random()*5)];
        } while(shortbow.dupCheckSuf(this.option[4])!=0);
      
      }
    else if(this.OptionNum==3){
      
        do{
          this.option[4] = suffix[Math.floor(Math.random()*5)];
        } while(shortbow.dupCheckSuf(this.option[4])!=0);
       do{
        this.option[5] = suffix[Math.floor(Math.random()*5)];
        } while(shortbow.dupCheckSuf(this.option[5])!=0);
    }
          this.optionNum =0;
          shortbow.showOption();
          this.rarity =2;

   
  },
  evolRandomPrefix : function(){
     
    this.optionNum = Math.floor(Math.random()*4);
    
    
    this.rarity = 1;
    if(this.optionNum > 0){
    this.prefix1 = prefix[Math.floor(Math.random()*5)];
    this.optionNum = 0;
    console.log(this.prefix1);
    document.getElementById("prefix1").innerHTML=this.prefix1;
    }
    
  },
  evolRandomSuffix : function() {
    
      this.optionNum = Math.floor(Math.random()*4);
      if(this.optionNum >0|| this.prefix1 =='')
      {
      this.suffix1 = suffix[Math.floor(Math.random()*5)];
      this.optionNum = 0;
      console.log(this.suffix1);
      document.getElementById("suffix1").innerHTML=this.suffix1;
      }
      
  },
   deafEssence: function(){
      if(this.rarity ==1){console.log('매직 아이템에 사용 불가능합니다.');}
      else {
        shortbow.reset();
        
        this.rarity =2;
        this.option[0] =prefix[4];
        
        this.optionNum = Math.floor(Math.random()*4);
        if(this.optionNum==0 || this.optionNum==1)console.log("option0,1");
        else if(this.optionNum==2) {
          console.log("option2")
          do{
          this.option[1] = prefix[Math.floor(Math.random()*5)];
            
          } while(shortbow.dupCheckPre(this.option[1])!=0);
          console.log(this.prefix2);
          document.getElementById("prefix2").innerHTML=this.prefix2;
          this.optionNum =0;
        }
        else if(this.optionNum ==3) {
          console.log("option3")
          do{
            this.option[1] = prefix[Math.floor(Math.random()*5)];
            
          } while(shortbow.dupCheckPre(this.option[1])!=0);
          do{
            this.option[2] = prefix[Math.floor(Math.random()*5)];
          }while(shortbow.dupCheckPre(this.option[2])!=0);
        }
        this.optionNum = 0;
        this.optionNum =Math.floor(Math.random()*4);
        if(this.optionNum ==0 || this.optionNum==1) this.option[3]=suffix[Math.floor(Math.random()*5)];
        else if(this.optionNum==2){ suffix[Math.floor(Math.random()*5)];
            do{
              this.option[4] = suffix[Math.floor(Math.random()*5)];
            }while(shortbow.dupCheckSuf(this.option[4])!=0);
          
        }
        else if(this.optionNum ==3){
          this.option[3] =suffix[Math.floor(Math.random()*5)];
          do{
            this.option[4] = suffix[Math.floor(Math.random()*5)];
          }while(shortbow.dupCheckSuf(this.option[4])!=0);

          do{
            this.option[5] = suffix[Math.floor(Math.random()*5)];
          }while(shortbow.dupCheckSuf(this.option[5])!=0);
        }
      }   
          this.optionNum =0;
          shortbow.showOption();

        
      
  },
  
  dupCheckPre: function(option){
    let count = 0;
    if(option == this.option[0]) count+=1;
    if(option == this.option[1]) count+=1;
    if(option == this.option[2]) count+=1;

    if(count > 1) return 1;
    else return 0;
    },
    dupCheckSuf: function(opt){
      let count = 0;
      if(opt == this.option[3]) count+=1;
      if(opt == this.option[4]) count+=1;
      if(opt == this.option[5]) count+=1;
  
      if(count > 1) return 1;
      else return 0;
      },
    
    
  showOption : function(){
          document.getElementById("prefix1").innerHTML=this.option[0];
          console.log(this.prefix1);
          console.log(this.prefix2);
          document.getElementById("prefix2").innerHTML=this.option[1];
          console.log(this.prefix3);
          document.getElementById("prefix3").innerHTML=this.option[2];
          document.getElementById("suffix1").innerHTML=this.option[3];
          document.getElementById("suffix2").innerHTML=this.option[4];
          document.getElementById("suffix3").innerHTML=this.option[5];
  },
  annOrb : function() {
    let num;
    if(this.rarity ==1){
      if(this.prefix1==''&&this.prefix2!='') {this.prefix2 ='';}
      if(this.prefix1!=''&&this.prefix2=='') {this.prefix1='';}
      num = Math.floor(Math.random()*2); console.log(num);
      if(num ==0 && this.prefix1 !='') this.prefix1 ='';
      else if(this.prefix1 ==''&&this.prefix2=='') shortbow.reset(); 
      else if(num==1 && this.prefix2!='') this.prefix2 ='';
      
    }
    else if(this.rarity==2){
      if(this.option[0] =='')blankChk[0] =1; 
      if(this.option[1] =='')blankChk[1] =1;
      if(this.option[2] =='')blankChk[2] =1;
      if(this.option[3] =='')blankChk[3] =1;
      if(this.option[4] =='')blankChk[4] =1;
      if(this.option[5] =='')blankChk[5] =1;
      }
      else if(this.rarity==0) return 0;
      let out =0;
      while(out!=1){
        num = Math.floor(Math.random()*6); console.log("w"+num);
        if(blankChk[num]==0){
          this.option[num]=''; out=1; console.log(this.option[num]); blankChk[num]=1;  } 
        else if(blankChk[0]==1&&blankChk[1]==1&&blankChk[2]==1&&blankChk[3]==1&&blankChk[4]==1&&blankChk[5]==1) {shortbow.reset(); out=1;}
        else if(this.rarity==0) out=1; 
      } 
      
    },
    
  
  reset : function(){
    this.rarity =0;
    this.option[0] = '';
    this.option[1] = '';
    this.option[2]= '';
    this.option[3] = '';
    this.option[4]= '';
    this.option[5] = '';
  }
  
}