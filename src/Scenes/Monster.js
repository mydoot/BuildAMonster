class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
        this.AKey = null;
        this.DKey = null;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY+25, "monsterParts", "mouthI.png");
        my.sprite.mouthFang = this.add.sprite(this.bodyX, this.bodyY+25, "monsterParts", "mouthF.png");
        my.sprite.RightArm = this.add.sprite(this.bodyX+100, this.bodyY+35, "monsterParts", "arm_greenE.png");
        my.sprite.LeftArm = this.add.sprite(this.bodyX-100, this.bodyY+35, "monsterParts", "arm_greenE.png");
        my.sprite.LeftArm.flipX = true;    
        my.sprite.mouthFang.visible = false;  

        my.sprite.RightLeg = this.add.sprite(this.bodyX+50, this.bodyY+130, "monsterParts", "leg_greenD.png");
        my.sprite.LeftLeg = this.add.sprite(this.bodyX-50, this.bodyY+130, "monsterParts", "leg_greenD.png");
        my.sprite.LeftLeg.flipX = true;      

        my.sprite.RightEye = this.add.sprite(this.bodyX+35, this.bodyY-25, "monsterParts", "eye_blue.png");
        my.sprite.LeftEye = this.add.sprite(this.bodyX-35, this.bodyY-25, "monsterParts", "eye_blue.png");
        
        my.sprite.RightEye.scale = 0.75
        my.sprite.LeftEye.scale = 0.75
    
        my.sprite.RightHorn = this.add.sprite(this.bodyX+35, this.bodyY-75, "monsterParts", "detail_green_horn_small.png");
        my.sprite.LeftHorn = this.add.sprite(this.bodyX-35, this.bodyY-75, "monsterParts", "detail_green_horn_small.png");
        my.sprite.LeftHorn.flipX = true;   


        my.SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        my.FKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        my.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        my.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


        //event input: dimple smile     
        my.FKey.on('down', (key, event) => {
            my.sprite.mouth.visible = false;
            my.sprite.mouthFang.visible = true;
        });

        //event input: regular smile        
        my.SKey.on('down', (key, event) => {
            my.sprite.mouth.visible = true;
            my.sprite.mouthFang.visible = false;
        });
        

        
        }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (my.AKey.isDown) {
            console.log("bruh");
           
            for (const spritePart in my.sprite){
                const spriteParts = my.sprite[spritePart]
                spriteParts.x += 2;
            }


        }
        if (my.DKey.isDown) {
            console.log("bruh");
            for (const spritePart in my.sprite){
                const spriteParts = my.sprite[spritePart]
                spriteParts.x -= 2;
            }
       
         }   
    }
}
