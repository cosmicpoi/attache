<?php

$config['site_title'] = 'My Portfolio';              // Site title
$config['theme'] = 'attache';         

$config['attache_logourl'] = 'img/logo.png';         // Can be accessed by {{ config.attache_logourl }} in a theme
$config['attache_categories'] = array('featured','code', 'design', 'art');

$config['attache_contact'] = array(
		array('john@doe.com', '#'),
		array('Facebook', '#'),
		array('Twitter', '#')
	);
$config['attache_contactmessage'] = "Maybe put some contact or freelance information here.";

$config['attache_showlinks'] = true;
$config['attache_links'] = array(
		array('Link 1', '#'),
		array('Link 2', '#'),
		array('Link 3', '#')
	);
$config['attache_linkmessage'] = "Here are my links!";

$config['attache_footer'] = "Put some information here! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iure omnis, cum nam, asperiores explicabo? Dolores necessitatibus tenetur nemo, alias! Voluptate nostrum nemo inventore eveniet magnam, itaque excepturi doloremque libero!";
$config['attache_subtitles'] = array(
		'coder++',
		'script monkey',
		'pineapple lover'
	);

$config['attache_navlinks'] = array(
		array('CV', '#'),
		array('github', '#'),
		array('blog', '#')
	);