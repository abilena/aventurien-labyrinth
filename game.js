
var STEPSIZE = 9;

var pos_x;
var pos_y;
var old_x;
var old_y;
var img;
var context;

var chalk_drawings;
var chalk_cross;
var chalk_arrow_up;
var chalk_arrow_down;
var chalk_arrow_left;
var chalk_arrow_right;

var trigger_illusion_hit;
var trigger_golem_hit;
var trigger_monster_hit;
var trigger_context;

var illusion_images;
var illusion_images_x;
var illusion_images_y;
var popup_visible;

var moveX = 0;
var moveY = 0;
var keyCodes = new Array();

window.addEventListener("touchstart", updateTouch, true);
window.addEventListener("touchmove", updateTouch, true);
window.addEventListener("touchend", updateTouch, true);
window.addEventListener("mouseenter", updateMouse, true);
window.addEventListener("mousemove", updateMouse, true);
window.addEventListener("mousedown", updateMouse, true);
window.addEventListener("mouseup", updateMouse, true);
window.addEventListener("mouseleave", updateMouse, true);
window.addEventListener("keydown", updateKey, true);
var id = window.setInterval(update, 100);

function initialize()
{
    context = document.getElementById("labyrinth").getContext("2d");

    pos_x = -1250;
    pos_y = -2850;
	old_x = 0;
	old_y = 0;
    img = new Image();
    img.onload = function ()
    {
        context.drawImage(img, pos_x, pos_y);
    }
    img.src = "img/labyrinth.png";
	
	chalk_cross = new Image();
	chalk_arrow_up = new Image();
	chalk_arrow_down = new Image();
	chalk_arrow_left = new Image();
	chalk_arrow_right = new Image();
	chalk_cross.src = "img/cross.png";
	chalk_arrow_up.src = "img/arrow_up.png";
	chalk_arrow_down.src = "img/arrow_down.png";
	chalk_arrow_left.src = "img/arrow_left.png";
	chalk_arrow_right.src = "img/arrow_right.png";
	chalk_drawings = new Array();
	
	trigger_context = document.getElementById("triggers").getContext("2d");
    var trigger_img = new Image();
    trigger_img.onload = function ()
    {
        trigger_context.drawImage(trigger_img, 0, 0);
    }
    trigger_img.src = "img/triggers.png";
	
	trigger_illusion_hit = new Array();
	illusion_images = new Array();
	illusion_images_x = new Array();
	illusion_images_y = new Array();
	for (index = 1; index < 9; index++)
	{
		var illusion_image = new Image();
		illusion_image.src = "img/illusion_" + index + ".png";
		
		trigger_illusion_hit.push(0);
		illusion_images.push(illusion_image);
		illusion_images_x.push(0);
		illusion_images_y.push(0);
	}
	
	illusion_images_x[0] = 2241;
	illusion_images_y[0] = 216;
	illusion_images_x[1] = 2160;
	illusion_images_y[1] = 2322;
	illusion_images_x[2] = 2133;
	illusion_images_y[2] = 1350;
	illusion_images_x[3] = 1350;
	illusion_images_y[3] = 661;
	illusion_images_x[4] = 567;
	illusion_images_y[4] = 1350;
	illusion_images_x[5] = 1350;
	illusion_images_y[5] = 2227;
	illusion_images_x[6] = 675;
	illusion_images_y[6] = 2403;
	illusion_images_x[7] = 1849;
	illusion_images_y[7] = 999;
	
	trigger_golem_hit = new Array();
	for (index = 0; index < 6; index++)
		trigger_golem_hit.push(0);

	trigger_monster_hit = new Array();
	for (index = 0; index < 8; index++)
		trigger_monster_hit.push(0);
		
	popup_visible = false;
}

function updateTouch(e)
{
    e = e || window.event;

    if ((e.changedTouches.length == 0) || (e.changedTouches[0].clientX == 0 && e.changedTouches[0].clientY == 0)) {
        moveX = 0;
        moveY = 0;
    }
    else {
        moveX = -(e.changedTouches[0].clientX - (window.innerWidth / 2)) / (window.innerWidth / 2) * STEPSIZE * 3;
        moveY = -(e.changedTouches[0].clientY - (window.innerHeight / 2)) / (window.innerHeight / 2) * STEPSIZE * 3;
    }
}

function updateMouse(e)
{
    e = e || window.event;

    if ((e.clientX == 0 && e.clientY == 0) || (e.buttons != 1))
    {
        moveX = 0;
        moveY = 0;
    }
    else
    {
        moveX = -(e.clientX - (window.innerWidth / 2)) / (window.innerWidth / 2) * STEPSIZE * 3;
        moveY = -(e.clientY - (window.innerHeight / 2)) / (window.innerHeight / 2) * STEPSIZE * 3;
    }
}

function updateKey(e)
{
    e = e || window.event;

    keyCodes.push(e.keyCode);
	
	var keyCode = (e.which || e.keyCode);
	if ((keyCode == 82) || (keyCode >= 112 && keyCode <= 123))
	{
		e.preventDefault();
	}
}

function update()
{
	if (doMovement()) {
		doDrawLabyrinth();	
		doTriggers();
		doChalkDrawings();
		doLighting();
        }
}

function doMovement()
{
	if (popup_visible)
		return false;
    var moved = false;
    var new_pos_x = Math.floor(pos_x + moveX);
    var new_pos_y = Math.floor(pos_y + moveY);

    while (keyCodes.length > 0)
    {
        var keyCode = keyCodes.pop();

        switch (keyCode) {
            case 38:   // arrow up key
            case 87: // W key
                new_pos_x = pos_x;
                new_pos_y = pos_y + STEPSIZE;
                break;
            case 37: // arrow left key
            case 65: // A key
                new_pos_x = pos_x + STEPSIZE;
                new_pos_y = pos_y;
                break;
            case 40: // arrow down key
            case 83: // S key
                new_pos_x = pos_x;
                new_pos_y = pos_y - STEPSIZE;
                break;
            case 39: // arrow right key
            case 68: // D key
                new_pos_x = pos_x - STEPSIZE;
                new_pos_y = pos_y;
                break;
            case 66: // B key
                if (old_x == 0)
                    return;
                moved=true;
                logMessage("Transversalis Teleport!");
                logMessage("Ursprungs-Interferenzen f&uuml;r Transversalis-matrix: h=" + -pos_x + ", v=" + -pos_y);
                pos_x = old_x;
                pos_y = old_y;
                old_x = 0;
                old_y = 0;
                logMessage("Ziel-Interferenzen f&uuml;r Transversalis-matrix: h=" + -pos_x + ", v=" + -pos_y);
                break;
            case 71: // G key
                logMessage("Transversalis Teleport!");
                logMessage("Ursprungs-Interferenzen f&uuml;r Transversalis-matrix: h=" + -pos_x + ", v=" + -pos_y);
		moved=true;
                old_x = pos_x;
                old_y = pos_y;
				var input_x = 0 - prompt("Bitte Horizontal-Interferenz fuer Transversalis-matrix angeben", -pos_x);
				var input_y = 0 - prompt("Bitte Vertical-Interferenz fuer Transversalis-matrix angeben", -pos_y);
				if (input_x != 0 && input_y != 0)
				{
					pos_x = input_x;
					pos_y = input_y;
					logMessage("Ziel-Interferenzen f&uuml;r Transversalis-matrix: h=" + -pos_x + ", v=" + -pos_y);
				}
                break;
            case 98: // num-pad down key
            case 100: // num-pad left key
            case 101: // num-pad middle key
            case 102: // num-pad right key
            case 104: // num-pad up key
                chalk_drawings.push(new Array(keyCode, pos_x, pos_y));
		moved=true;
                break;
            case 120: // F9 key: reveal entrance to secret chamber
                logMessage("Ihr h&ouml;rt die fl&uuml;sternde Stimme des Geistes: Der Zugang zur geheimen Kammer steht euch nun offen.");
                trigger_illusion_hit[7] = 1;
		moved=true;
                break;
            case 112: // F1 key: display position
                logMessage("Aktuelle-Interferenzen f&uuml;r Transversalis-matrix: h=" + -pos_x + ", v=" + -pos_y);
                break;
            case 115: // F4 key: teleport to secret chamber
                if (pos_x == -1709 && pos_y == -924)
                    return;

                logMessage("Transversalis Teleport!");
                logMessage("Ursprungs-Interferenzen f&uuml;r Transversalis-matrix: h=" + -pos_x + ", v=" + -pos_y);
                old_x = pos_x;
                old_y = pos_y;
                pos_x = -1709;
                pos_y = -924;
                logMessage("Ziel-Interferenzen f&uuml;r Transversalis-matrix: h=" + -pos_x + ", v=" + -pos_y);
		moved=true;
                break;
            case 116: // f5 key (refreshing browser)
            case 144: // num-lock key
                break;
            default:
                break;
        }
    }
    moved = moved || (pos_x != new_pos_x) || (pos_y != new_pos_y);

    if (isBlackPixel(128 + (pos_x - new_pos_x), 128 + (pos_y - new_pos_y)) == 0)
    {
        pos_x = new_pos_x;
        pos_y = new_pos_y;
    } 
    return moved;
}

function doDrawLabyrinth()
{
    context.drawImage(img, pos_x, pos_y);
}

function doTriggers()
{
    var pixelData = trigger_context.getImageData(128 - pos_x, 128 - pos_y, 1, 1).data;
	var index;
	
	if (pixelData[0] == 255)
	{
		index = pixelData[1] - 1;
		
		if (trigger_illusion_hit[index] == 0)
		{
			var malus = -8;
			if (index == 7)
				malus = -15;
		
			if (succeededAnySkillCheck(malus))
			{
				trigger_illusion_hit[index] = 1;
			}
			else
			{
				trigger_illusion_hit[index] = 2;
			}
		}
	}
	else if (pixelData[1] == 255)
	{
		index = pixelData[0] - 1;
	
		if (trigger_golem_hit[index] == 0)
		{
			doShowPopup("img/popup_mondstein_golemid.png", "Kampf: Die W&auml;chter aus Mondstein");
			trigger_golem_hit[index] = 1;
		}
	}
	else if (pixelData[2] == 255)
	{
		index = pixelData[0];
	
		if (trigger_monster_hit[index] == 0)
		{
			if (index == 1)
				doShowPopup("img/popup_gruftasseln.png", "Kampf: Das Gruftasselnest");
			if (index == 2)
				doShowPopup("img/popup_hoelenspinnen.png", "Kampf: Die H&ouml;hlenspinnen");
			if (index == 3)
				doShowPopup("img/popup_library.png", "Entdeckt: Die Bibliothek");
			if (index == 4)
				doShowPopup("img/popup_geheimraum.png", "Entdeckt: Der Geheimraum");
			if (index == 5)
				doShowPopup("img/popup_speicherraum.png", "Entdeckt: Der Speicherraum");
			if (index == 6)
				doShowPopup("img/popup_seelenkammer.png", "Entdeckt: Die Seelenkammer der Bashuridin");
			if (index == 7)
				doShowPopup("img/popup_gang.png", "Entdeckt: Der verzerrte Gang");
				
			trigger_monster_hit[index] = 1;
		}
	}
	else
	{
		var check = Math.floor(Math.random() * 100000);
		if (check == 42)
		{
			index = 0;
			
			if (trigger_monster_hit[index] == 0)
			{
				doShowPopup("img/popup_wolfsratten.png", "Kampf: Ratten im Gem&auml;uer");
				trigger_monster_hit[index] = 1;
			}
		}
	}
	
	for (index = 0; index < trigger_illusion_hit.length; index++)
	{
		if (trigger_illusion_hit[index] == 1)
		{
			var x = illusion_images_x[index];
			var y = illusion_images_y[index];
		
			context.drawImage(illusion_images[index], pos_x + x, pos_y + y);
		}
	}
}

function roll20()
{
	return (Math.floor(Math.random() * 20) + 1);
}

function succeededSkillCheck(name, a, b, c, skill, malus)
{
	var ausgleichswert = skill + malus;
	
	var roll_a = roll20();
	var roll_b = roll20();
	var roll_c = roll20();
	
	var success = true;
	if (roll_a > a + ausgleichswert)
		success = false;
	if (roll_b > b + ausgleichswert)
		success = false;
	if (roll_c > c + ausgleichswert)
		success = false;
	
	var result = (success ? "<strong>Geschafft!</strong>" : "...");
	
	if ((roll_a == 1 && roll_b == 1) || (roll_a == 1 && roll_c == 1) || (roll_b == 1 && roll_c == 1))
	{
		result = "<strong style=\"color: Chartreuse;\">Spezielle Erfahrung!!!</strong>";
		success = true;
	}
	
	logMessage(name + " (" + a + "/" + b + "/" + c + ") TaW +" + skill + " " + malus + " (Erschwernis). Wurf: " + roll_a + "/" + roll_b + "/" + roll_c + ": " + result);
	
	return success;
}

function succeededAnySkillCheck(malus)
{
	var success = false;
	
	success = succeededSkillCheck("Wapiya",     12, 13, 13, 8, malus) || success;
	success = succeededSkillCheck("Praiala",    13, 15, 15, 7, malus) || success;
	success = succeededSkillCheck("Idrasmine",  10, 15, 15, 12, malus) || success;
	success = succeededSkillCheck("Dariyon",    15, 14, 14, 10, malus) || success;
	success = succeededSkillCheck("Amaryllion", 14, 15, 15, 9, malus) || success;
	success = succeededSkillCheck("Alawin",     12, 12, 12, 8, malus) || success;
	success = succeededSkillCheck("Acanio",     10, 15, 15, 12, malus) || success;

	return success;
}

function logMessage(message)
{
	var message_div = document.getElementById("messages");
	var messages = message_div.innerHTML;
	messages = message + "<br>" + messages;
	message_div.innerHTML = messages;
}

function doShowPopup(monster_image, message)
{
	var popup_image = document.getElementById("popup_image");
	popup_image.style.backgroundImage = "url('" + monster_image + "')";
	
	var popup_div = document.getElementById("popup");
	popup_div.style.visibility = "visible";
	
	popup_visible = true;
	
	logMessage(message);
}

function doHidePopup()
{
	var popup_div = document.getElementById("popup");
	popup_div.style.visibility = "hidden";
	popup_visible = false;
}

function doChalkDrawings()
{
	for (i = 0; i < chalk_drawings.length; i++)
	{
		var chalk_drawing = chalk_drawings[i];
		var type = chalk_drawing[0];
		var x = chalk_drawing[1];
		var y = chalk_drawing[2];
		
		var chalk_image = chalk_cross;
		
		switch (type)
		{
			case 98:
				chalk_image = chalk_arrow_down;
				break;
			case 100:
				chalk_image = chalk_arrow_left;
				break;
			case 101:
				chalk_image = chalk_cross;
				break;
			case 102:
				chalk_image = chalk_arrow_right;
				break;
			case 104:
				chalk_image = chalk_arrow_up;
				break;
		}
		
		context.drawImage(chalk_image, pos_x - x + 128 - 25, pos_y - y + 128 - 25);
	}
}

function doLighting()
{
    var items = new Array(16);
    for (y = 0; y < 16; y++)
    {
        items[y] = new Array(16);
        for (x = 0; x < 16; x++)
        {
            items[y][x] = maskFacet(x, y);
        }
    }

    for (y = 0; y < 16; y++) {
        for (x = 0; x < 16; x++) {
            var self = items[y][x];
            var left = x == 0 ? 1 : items[y][x - 1];
            var right = x == 15 ? 1 : items[y][x + 1];
            var top = y == 0 ? 1 : items[y - 1][x];
            var bottom = y == 15 ? 1 : items[y + 1][x];

            var mask_facet = document.getElementById("mask_" + y.toString(16).toUpperCase() + x.toString(16).toUpperCase());

            if (self == 0 || left == 0 || right == 0 || top == 0 || bottom == 0) {
                mask_facet.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
            }
            else {
                mask_facet.style.backgroundColor = "rgba(0, 0, 0, 1.0)";
            }
        }
    }
}

function maskFacet(x, y) {
    var center_x = (x * 16) + 8;
    var center_y = (y * 16) + 8;

    return isLighted(center_x, center_y);
}

function isLighted(x, y)
{
    var r = Math.sqrt(Math.pow(x - 128, 2) + Math.pow(y - 128, 2));
    var steps = Math.max(1, Math.floor(r / 8));
    var step_x = (x - 128) / steps;
    var step_y = (y - 128) / steps;

    var count = 0;
    for (i = 0; i < steps; i++)
    {
        if (isBlackPixel(x - Math.floor(i * step_x), y - Math.floor(i * step_y)) > 0)
            count++;
    }

    return count;
}

function isBlackPixel(x, y)
{
    var pixelData = context.getImageData(x, y, 1, 1).data;
    
    //context.moveTo(x, y);
    //context.lineTo(x, y - 1);
    //context.stroke();

    return ((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0));
}
