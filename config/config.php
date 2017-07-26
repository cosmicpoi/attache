<?php

$config['site_title'] = 'My Portfolio'; //ATTACHE: gets displayed in header
$config['theme'] = 'attache';         

//attache configuration

//------- BASIC CONFIG -----------
//location of logo relative to themes/attache/
$config['attache_logourl'] = 'img/logo.png';         // Can be accessed by {{ config.attache_logourl }} in a theme
//clickable categories
$config['attache_categories'] = array('featured','code', 'design', 'art');
//top-level navigation pages on the header (automatically rendered to both the normal and sticky header)
$config['attache_navlinks'] = array(
		array('CV', '#'),
		array('github', '#'),
		array('blog', '#')
	);

// ------ CONTACT SIDEBAR --------
//links in the contact sidebar
$config['attache_contact'] = array(
		array('john@doe.com', '#'), // {shown text}, {href}
		array('Facebook', '#'),
		array('Twitter', '#')
	);
//message at the bottom of the contact sidebar
$config['attache_contactmessage'] = "Maybe put some contact or freelance information here.";

//------ LINKS SIDEBAR --------
//show the links sidebar or not
$config['attache_showlinks'] = true;
//links in the links sidebar
$config['attache_links'] = array(
		array('Link 1', '#'), // {shown text}, {href}
		array('Link 2', '#'),
		array('Link 3', '#')
	);
//message at the bottom of the links sidebar
$config['attache_linkmessage'] = "Here are my links!";

//-------OTHER STUFF --------
//footer message
$config['attache_footer'] = "Put some information here! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iure omnis, cum nam, asperiores explicabo? Dolores necessitatibus tenetur nemo, alias! Voluptate nostrum nemo inventore eveniet magnam, itaque excepturi doloremque libero!";
//possible subtitles for typewriter effect
$config['attache_subtitles'] = array(
		'coder++',
		'script monkey',
		'pineapple lover'
	);
