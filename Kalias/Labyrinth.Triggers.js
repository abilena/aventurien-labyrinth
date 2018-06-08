
hasTriggers = true;

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
			doShowPopup(labyrinth_name + "/img/popup_mondstein_golemid.png", "Kampf: Die W&auml;chter aus Mondstein");
			trigger_golem_hit[index] = 1;
		}
	}
	else if (pixelData[2] == 255)
	{
		index = pixelData[0];
	
		if (trigger_monster_hit[index] == 0)
		{
			if (index == 1)
				doShowPopup(labyrinth_name + "/img/popup_gruftasseln.png", "Kampf: Das Gruftasselnest");
			if (index == 2)
				doShowPopup(labyrinth_name + "/img/popup_hoelenspinnen.png", "Kampf: Die H&ouml;hlenspinnen");
			if (index == 3)
				doShowPopup(labyrinth_name + "/img/popup_library.png", "Entdeckt: Die Bibliothek");
			if (index == 4)
				doShowPopup(labyrinth_name + "/img/popup_geheimraum.png", "Entdeckt: Der Geheimraum");
			if (index == 5)
				doShowPopup(labyrinth_name + "/img/popup_speicherraum.png", "Entdeckt: Der Speicherraum");
			if (index == 6)
				doShowPopup(labyrinth_name + "/img/popup_seelenkammer.png", "Entdeckt: Die Seelenkammer der Bashuridin");
			if (index == 7)
				doShowPopup(labyrinth_name + "/img/popup_gang.png", "Entdeckt: Der verzerrte Gang");
				
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
				doShowPopup(labyrinth_name + "/img/popup_wolfsratten.png", "Kampf: Ratten im Gem&auml;uer");
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

function onInitialize()
{
	for (index = 1; index < 9; index++)
	{
		var illusion_image = new Image();
		illusion_image.src = labyrinth_name + "/img/illusion_" + index + ".png";
		
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

}
