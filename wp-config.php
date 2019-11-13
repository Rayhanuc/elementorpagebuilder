<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */

if (file_exists(dirname(__FILE__)."/local.php")) {
	//Local database settings
	define('DB_NAME', 'elementorpagebuilder');
	define('DB_USER', 'root');
	define('DB_PASSWORD', '');
	define('DB_HOST', 'localhost');
}else{
	//Live database settings
	define('DB_NAME', 'lkdfjskldsfj');
	define('DB_USER', 'root');
	define('DB_PASSWORD', '');
	define('DB_HOST', 'localhost');
}





// define( 'DB_NAME', 'elementorpagebuilder' );

/** MySQL database username */
// define( 'DB_USER', 'root' );

/** MySQL database password */
// define( 'DB_PASSWORD', '' );

/** MySQL hostname */
// define( 'DB_HOST', 'localhost' );






/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ']Z-u1{dy44-1TeXb+EdOu;m(B.iT<KZo>5iC7H8(uIR4NEaWqE9xKpfOBR:obP0D' );
define( 'SECURE_AUTH_KEY',  'E6<6}(#2]S>Z~DU]F|b&Nw-CcKJtZgLbx}E;/9B]UKSNvXgG}PW+a;5DK.4lBE1<' );
define( 'LOGGED_IN_KEY',    'ke?|J-.i3qui<O*(L{!FS]94,7DSg=8[(KGN-Cd[GdKhiC^Fu+F<i|K@kO:5:*HC' );
define( 'NONCE_KEY',        '4FZd*J!>jo-uA5+[NLmCMiRfoRLy@JaCm}EOZ_9[U(Y$c%rPNtJ_V9o4j?`.57F|' );
define( 'AUTH_SALT',        'Mx0[mWt&JMPvnFw2hq.i+vRIg<G78: }+q$Q/4[5{fWSS/UKp&0_V(?YM+%9((q[' );
define( 'SECURE_AUTH_SALT', '%:>Az!)ZDL-i^0U2q,%P!w__b9Uz0x)l~&U_]V9;RBQl~@ L% U$F@GL!m<v6Y@s' );
define( 'LOGGED_IN_SALT',   ':[!t`1@._P9F5|LbBKCS>$5xSNI80_<;tR<+-&#zs4cH@ePOP:= W,1H-TYg(`rK' );
define( 'NONCE_SALT',       'Bp^)C[y}5YSvkt-yK%lKW8:YSUhZD/c|=OO82Bae_N3 K=C@<MhJ$+JH^]vt0~W]' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
