<!doctype html>
<html>
	<head>
		<?php
			$name = $_GET['name'];
			$title = $_GET['title'];
		?>
		<title><?php echo($name); ?></title>
		<meta name="viewport" content="width=device-width">
		<link rel="stylesheet" type="text/css" href="Labyrinth.css">
		<script type="text/javascript" src="Labyrinth.js"></script>
		<script type="text/javascript" src="<?php echo($name); ?>/Labyrinth.Triggers.js"></script>
</head>
<body onload="initialize('<?php echo($name); ?>')">
    <div class="game">
        <table class="mask">
            <tr>
                <td class="mask_facet" id="mask_00"></td>
                <td class="mask_facet" id="mask_01"></td>
                <td class="mask_facet" id="mask_02"></td>
                <td class="mask_facet" id="mask_03"></td>
                <td class="mask_facet" id="mask_04"></td>
                <td class="mask_facet" id="mask_05"></td>
                <td class="mask_facet" id="mask_06"></td>
                <td class="mask_facet" id="mask_07"></td>
                <td class="mask_facet" id="mask_08"></td>
                <td class="mask_facet" id="mask_09"></td>
                <td class="mask_facet" id="mask_0A"></td>
                <td class="mask_facet" id="mask_0B"></td>
                <td class="mask_facet" id="mask_0C"></td>
                <td class="mask_facet" id="mask_0D"></td>
                <td class="mask_facet" id="mask_0E"></td>
                <td class="mask_facet" id="mask_0F"></td>
            </tr>
            <tr>
                <td class="mask_facet" id="mask_10"></td>
                <td class="mask_facet" id="mask_11"></td>
                <td class="mask_facet" id="mask_12"></td>
                <td class="mask_facet" id="mask_13"></td>
                <td class="mask_facet" id="mask_14"></td>
                <td class="mask_facet" id="mask_15"></td>
                <td class="mask_facet" id="mask_16"></td>
                <td class="mask_facet" id="mask_17"></td>
                <td class="mask_facet" id="mask_18"></td>
                <td class="mask_facet" id="mask_19"></td>
                <td class="mask_facet" id="mask_1A"></td>
                <td class="mask_facet" id="mask_1B"></td>
                <td class="mask_facet" id="mask_1C"></td>
                <td class="mask_facet" id="mask_1D"></td>
                <td class="mask_facet" id="mask_1E"></td>
                <td class="mask_facet" id="mask_1F"></td>
            </tr>
            <tr>
                <td class="mask_facet" id="mask_20"></td>
                <td class="mask_facet" id="mask_21"></td>
                <td class="mask_facet" id="mask_22"></td>
                <td class="mask_facet" id="mask_23"></td>
                <td class="mask_facet" id="mask_24"></td>
                <td class="mask_facet" id="mask_25"></td>
                <td class="mask_facet" id="mask_26"></td>
                <td class="mask_facet" id="mask_27"></td>
                <td class="mask_facet" id="mask_28"></td>
                <td class="mask_facet" id="mask_29"></td>
                <td class="mask_facet" id="mask_2A"></td>
                <td class="mask_facet" id="mask_2B"></td>
                <td class="mask_facet" id="mask_2C"></td>
                <td class="mask_facet" id="mask_2D"></td>
                <td class="mask_facet" id="mask_2E"></td>
                <td class="mask_facet" id="mask_2F"></td>
            </tr>
            <tr>
                <td class="mask_facet" id="mask_30"></td>
                <td class="mask_facet" id="mask_31"></td>
                <td class="mask_facet" id="mask_32"></td>
                <td class="mask_facet" id="mask_33"></td>
                <td class="mask_facet" id="mask_34"></td>
                <td class="mask_facet" id="mask_35"></td>
                <td class="mask_facet" id="mask_36"></td>
                <td class="mask_facet" id="mask_37"></td>
                <td class="mask_facet" id="mask_38"></td>
                <td class="mask_facet" id="mask_39"></td>
                <td class="mask_facet" id="mask_3A"></td>
                <td class="mask_facet" id="mask_3B"></td>
                <td class="mask_facet" id="mask_3C"></td>
                <td class="mask_facet" id="mask_3D"></td>
                <td class="mask_facet" id="mask_3E"></td>
                <td class="mask_facet" id="mask_3F"></td>
            </tr>
            <tr>
                <td class="mask_facet" id="mask_40"></td>
                <td class="mask_facet" id="mask_41"></td>
                <td class="mask_facet" id="mask_42"></td>
                <td class="mask_facet" id="mask_43"></td>
                <td class="mask_facet" id="mask_44"></td>
                <td class="mask_facet" id="mask_45"></td>
                <td class="mask_facet" id="mask_46"></td>
                <td class="mask_facet" id="mask_47"></td>
                <td class="mask_facet" id="mask_48"></td>
                <td class="mask_facet" id="mask_49"></td>
                <td class="mask_facet" id="mask_4A"></td>
                <td class="mask_facet" id="mask_4B"></td>
                <td class="mask_facet" id="mask_4C"></td>
                <td class="mask_facet" id="mask_4D"></td>
                <td class="mask_facet" id="mask_4E"></td>
                <td class="mask_facet" id="mask_4F"></td>
            </tr>
            <tr>
                <td class="mask_facet" id="mask_50"></td>
                <td class="mask_facet" id="mask_51"></td>
                <td class="mask_facet" id="mask_52"></td>
                <td class="mask_facet" id="mask_53"></td>
                <td class="mask_facet" id="mask_54"></td>
                <td class="mask_facet" id="mask_55"></td>
                <td class="mask_facet" id="mask_56"></td>
                <td class="mask_facet" id="mask_57"></td>
                <td class="mask_facet" id="mask_58"></td>
                <td class="mask_facet" id="mask_59"></td>
                <td class="mask_facet" id="mask_5A"></td>
                <td class="mask_facet" id="mask_5B"></td>
                <td class="mask_facet" id="mask_5C"></td>
                <td class="mask_facet" id="mask_5D"></td>
                <td class="mask_facet" id="mask_5E"></td>
                <td class="mask_facet" id="mask_5F"></td>
            </tr>
            <tr>
                <td class="mask_facet" id="mask_60"></td>
                <td class="mask_facet" id="mask_61"></td>
                <td class="mask_facet" id="mask_62"></td>
                <td class="mask_facet" id="mask_63"></td>
                <td class="mask_facet" id="mask_64"></td>
                <td class="mask_facet" id="mask_65"></td>
                <td class="mask_facet" id="mask_66"></td>
                <td class="mask_facet" id="mask_67"></td>
                <td class="mask_facet" id="mask_68"></td>
                <td class="mask_facet" id="mask_69"></td>
                <td class="mask_facet" id="mask_6A"></td>
                <td class="mask_facet" id="mask_6B"></td>
                <td class="mask_facet" id="mask_6C"></td>
                <td class="mask_facet" id="mask_6D"></td>
                <td class="mask_facet" id="mask_6E"></td>
                <td class="mask_facet" id="mask_6F"></td>
            </tr>
            <tr>
                <td class="mask_facet" id="mask_70"></td>
                <td class="mask_facet" id="mask_71"></td>
                <td class="mask_facet" id="mask_72"></td>
                <td class="mask_facet" id="mask_73"></td>
                <td class="mask_facet" id="mask_74"></td>
                <td class="mask_facet" id="mask_75"></td>
                <td class="mask_facet" id="mask_76"></td>
                <td class="mask_facet" id="mask_77"></td>
                <td class="mask_facet" id="mask_78"></td>
                <td class="mask_facet" id="mask_79"></td>
                <td class="mask_facet" id="mask_7A"></td>
                <td class="mask_facet" id="mask_7B"></td>
                <td class="mask_facet" id="mask_7C"></td>
                <td class="mask_facet" id="mask_7D"></td>
                <td class="mask_facet" id="mask_7E"></td>
                <td class="mask_facet" id="mask_7F"></td>
            </tr>
            <tr>
                <td class="mask_facet" id="mask_80"></td>
                <td class="mask_facet" id="mask_81"></td>
                <td class="mask_facet" id="mask_82"></td>
                <td class="mask_facet" id="mask_83"></td>
                <td class="mask_facet" id="mask_84"></td>
                <td class="mask_facet" id="mask_85"></td>
                <td class="mask_facet" id="mask_86"></td>
                <td class="mask_facet" id="mask_87"></td>
                <td class="mask_facet" id="mask_88"></td>
                <td class="mask_facet" id="mask_89"></td>
                <td class="mask_facet" id="mask_8A"></td>
                <td class="mask_facet" id="mask_8B"></td>
                <td class="mask_facet" id="mask_8C"></td>
                <td class="mask_facet" id="mask_8D"></td>
                <td class="mask_facet" id="mask_8E"></td>
                <td class="mask_facet" id="mask_8F"></td>
            </tr>
            <tr>
                <td class="mask_facet" id="mask_90"></td>
                <td class="mask_facet" id="mask_91"></td>
                <td class="mask_facet" id="mask_92"></td>
                <td class="mask_facet" id="mask_93"></td>
                <td class="mask_facet" id="mask_94"></td>
                <td class="mask_facet" id="mask_95"></td>
                <td class="mask_facet" id="mask_96"></td>
                <td class="mask_facet" id="mask_97"></td>
                <td class="mask_facet" id="mask_98"></td>
                <td class="mask_facet" id="mask_99"></td>
                <td class="mask_facet" id="mask_9A"></td>
                <td class="mask_facet" id="mask_9B"></td>
                <td class="mask_facet" id="mask_9C"></td>
                <td class="mask_facet" id="mask_9D"></td>
                <td class="mask_facet" id="mask_9E"></td>
                <td class="mask_facet" id="mask_9F"></td>
            </tr>
            <tr>
                <td class="mask_facet" id="mask_A0"></td>
                <td class="mask_facet" id="mask_A1"></td>
                <td class="mask_facet" id="mask_A2"></td>
                <td class="mask_facet" id="mask_A3"></td>
                <td class="mask_facet" id="mask_A4"></td>
                <td class="mask_facet" id="mask_A5"></td>
                <td class="mask_facet" id="mask_A6"></td>
                <td class="mask_facet" id="mask_A7"></td>
                <td class="mask_facet" id="mask_A8"></td>
                <td class="mask_facet" id="mask_A9"></td>
                <td class="mask_facet" id="mask_AA"></td>
                <td class="mask_facet" id="mask_AB"></td>
                <td class="mask_facet" id="mask_AC"></td>
                <td class="mask_facet" id="mask_AD"></td>
                <td class="mask_facet" id="mask_AE"></td>
                <td class="mask_facet" id="mask_AF"></td>
            </tr>
            <tr>
                <td class="mask_facet" id="mask_B0"></td>
                <td class="mask_facet" id="mask_B1"></td>
                <td class="mask_facet" id="mask_B2"></td>
                <td class="mask_facet" id="mask_B3"></td>
                <td class="mask_facet" id="mask_B4"></td>
                <td class="mask_facet" id="mask_B5"></td>
                <td class="mask_facet" id="mask_B6"></td>
                <td class="mask_facet" id="mask_B7"></td>
                <td class="mask_facet" id="mask_B8"></td>
                <td class="mask_facet" id="mask_B9"></td>
                <td class="mask_facet" id="mask_BA"></td>
                <td class="mask_facet" id="mask_BB"></td>
                <td class="mask_facet" id="mask_BC"></td>
                <td class="mask_facet" id="mask_BD"></td>
                <td class="mask_facet" id="mask_BE"></td>
                <td class="mask_facet" id="mask_BF"></td>
            </tr>
            <tr>
                <td class="mask_facet" id="mask_C0"></td>
                <td class="mask_facet" id="mask_C1"></td>
                <td class="mask_facet" id="mask_C2"></td>
                <td class="mask_facet" id="mask_C3"></td>
                <td class="mask_facet" id="mask_C4"></td>
                <td class="mask_facet" id="mask_C5"></td>
                <td class="mask_facet" id="mask_C6"></td>
                <td class="mask_facet" id="mask_C7"></td>
                <td class="mask_facet" id="mask_C8"></td>
                <td class="mask_facet" id="mask_C9"></td>
                <td class="mask_facet" id="mask_CA"></td>
                <td class="mask_facet" id="mask_CB"></td>
                <td class="mask_facet" id="mask_CC"></td>
                <td class="mask_facet" id="mask_CD"></td>
                <td class="mask_facet" id="mask_CE"></td>
                <td class="mask_facet" id="mask_CF"></td>
            </tr>
            <tr>
                <td class="mask_facet" id="mask_D0"></td>
                <td class="mask_facet" id="mask_D1"></td>
                <td class="mask_facet" id="mask_D2"></td>
                <td class="mask_facet" id="mask_D3"></td>
                <td class="mask_facet" id="mask_D4"></td>
                <td class="mask_facet" id="mask_D5"></td>
                <td class="mask_facet" id="mask_D6"></td>
                <td class="mask_facet" id="mask_D7"></td>
                <td class="mask_facet" id="mask_D8"></td>
                <td class="mask_facet" id="mask_D9"></td>
                <td class="mask_facet" id="mask_DA"></td>
                <td class="mask_facet" id="mask_DB"></td>
                <td class="mask_facet" id="mask_DC"></td>
                <td class="mask_facet" id="mask_DD"></td>
                <td class="mask_facet" id="mask_DE"></td>
                <td class="mask_facet" id="mask_DF"></td>
            </tr>
            <tr>
                <td class="mask_facet" id="mask_E0"></td>
                <td class="mask_facet" id="mask_E1"></td>
                <td class="mask_facet" id="mask_E2"></td>
                <td class="mask_facet" id="mask_E3"></td>
                <td class="mask_facet" id="mask_E4"></td>
                <td class="mask_facet" id="mask_E5"></td>
                <td class="mask_facet" id="mask_E6"></td>
                <td class="mask_facet" id="mask_E7"></td>
                <td class="mask_facet" id="mask_E8"></td>
                <td class="mask_facet" id="mask_E9"></td>
                <td class="mask_facet" id="mask_EA"></td>
                <td class="mask_facet" id="mask_EB"></td>
                <td class="mask_facet" id="mask_EC"></td>
                <td class="mask_facet" id="mask_ED"></td>
                <td class="mask_facet" id="mask_EE"></td>
                <td class="mask_facet" id="mask_EF"></td>
            </tr>
            <tr>
                <td class="mask_facet" id="mask_F0"></td>
                <td class="mask_facet" id="mask_F1"></td>
                <td class="mask_facet" id="mask_F2"></td>
                <td class="mask_facet" id="mask_F3"></td>
                <td class="mask_facet" id="mask_F4"></td>
                <td class="mask_facet" id="mask_F5"></td>
                <td class="mask_facet" id="mask_F6"></td>
                <td class="mask_facet" id="mask_F7"></td>
                <td class="mask_facet" id="mask_F8"></td>
                <td class="mask_facet" id="mask_F9"></td>
                <td class="mask_facet" id="mask_FA"></td>
                <td class="mask_facet" id="mask_FB"></td>
                <td class="mask_facet" id="mask_FC"></td>
                <td class="mask_facet" id="mask_FD"></td>
                <td class="mask_facet" id="mask_FE"></td>
                <td class="mask_facet" id="mask_FF"></td>
            </tr>
        </table>
        <canvas width="256" height="256" id="labyrinth">Can't load the maze game, because your browser doesn't support HTML5.</canvas>
        <img class="player" />
    </div>
    <div id="popup"><div id="popup_image"></div><div id="popup_button" class="ui" onclick="doHidePopup()">CLOSE</div></div>
    <div id="messages">Ihr steht vor dem Eingang des Labyrinths. Wie aus weiter Ferne k&ouml;nnt ihr eine wispernde Stimme h&ouml;ren.</div>
    <div id="messages_mask"></div>
    <div id="buttons">
        <div id="down"  class="ui button" onclick="emulateKey(83)"></div>
        <div id="up"    class="ui button" onclick="emulateKey(87)"></div>
        <div id="right" class="ui button" onclick="emulateKey(68)"></div>
        <div id="left"  class="ui button" onclick="emulateKey(65)"></div>

		<div id="paint" class="ui dropdown" onclick="openDropDown('paint_dropdown')"><span class="ui">MARKIEREN</span></div>
		<div id="paint_dropdown" class="ui dropdownpopup" style="display: none">
			<div id="paint_up"    class="ui button" onclick="emulateKey(104); openDropDown('paint_dropdown');"><span class="ui">NORDEN</span></div>
			<div id="paint_down"  class="ui button" onclick="emulateKey(98); openDropDown('paint_dropdown');"><span class="ui">S&Uuml;DEN</span></div>
			<div id="paint_left"  class="ui button" onclick="emulateKey(100); openDropDown('paint_dropdown');"><span class="ui">WESTEN</span></div>
			<div id="paint_right" class="ui button" onclick="emulateKey(102); openDropDown('paint_dropdown');"><span class="ui">OSTEN</span></div>
		</div>
		
		<div id="action" class="ui dropdown" onclick="openDropDown('action_dropdown')"><span class="ui">AKTIONEN</span></div>
		<div id="action_dropdown" class="ui dropdownpopup" style="display: none">
			<div id="display"     class="ui button" onclick="emulateKey(112); openDropDown('action_dropdown');"><span class="ui">POSITION</span></div>
			<div id="teleport"    class="ui button" onclick="emulateKey(71); openDropDown('action_dropdown');"><span class="ui">TELEPORT</span></div> 
			<div id="return"      class="ui button" onclick="emulateKey(66); openDropDown('action_dropdown');"><span class="ui">ZUR&Uuml;CK</span></div> 
			<div id="reveal"      class="ui button" onclick="emulateKey(120); openDropDown('action_dropdown');"><span class="ui">ENTH&Uuml;LLEN</span></div> 
			<div id="tele2"       class="ui button" onclick="emulateKey(115); openDropDown('action_dropdown');"><span class="ui">BEENDEN</span></div>  
			<a id="fullscreen"  class="ui button" href="#" target="_top"><span class="ui">VOLLBILD</span></a>  
		</div>
    </div>
    <canvas width="2755" height="3190" id="triggers"></canvas>
</body>
</html>