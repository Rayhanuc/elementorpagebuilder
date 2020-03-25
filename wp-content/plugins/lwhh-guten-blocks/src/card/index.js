/**
 * BLOCK: alert select block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText } = wp.editor;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'lwhh/card', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Card' ), // Block title.
	icon: 'yes', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'LWHH' ),
		__( 'Card' ),
    ],
    

    attributes: {
        title: {
            type: 'string',
        },

        content: {
            type: 'string',
        },

        user: {
            type: 'string',
        },

        date: {
            type: 'string',
        },

        btn_text: {
            type: 'string',
        },
    },

    supports: {
        
    },

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit( {attributes, setAttributes} ) {
        const {title, content, user, date, btn_text} = attributes;

        return (
            <div className="single-blog-box">
                <div className="blog-box-bg blog-box-bg-1"></div>
                <div className="blog-box-content">
                    <p className="blog-meta">
                        <span><a href="#"><i className="fa fa-user"></i> 
                        <RichText
                            value={ user }
                            multiline={false}
                            placeholder={__('Add your card user')}
                            onChange={ ( user ) => setAttributes( { user } ) }
                        />
                        </a></span>
                        <span><i className="fa fa-calendar"></i> 
                        <RichText
                            value={ date }
                            multiline={false}
                            placeholder={__('Add your card date')}
                            onChange={ ( date ) => setAttributes( { date } ) }
                        />
                        </span>
                    </p>

                    {/* <h3>A Short Guide to Talking About</h3> */}
                    <RichText
                        tagName="h3"
                        value={ title }
                        multiline={false}
                        placeholder={__('Add your card title')}
                        onChange={ ( title ) => setAttributes( { title } ) }
                    />

                    <RichText
                        tagName="p"
                        value={ content }
                        multiline={false}
                        placeholder={__('Add your card content')}
                        onChange={ ( content ) => setAttributes( { content } ) }
                    />
                    {/* <a href="" className="blog-readmore-btn">read more</a> */}

                    <RichText
                        tagName="a"
                        className="blog-readmore-btn"
                        value={ btn_text }
                        href="#"
                        multiline={false}
                        placeholder={__('label')}
                        onChange={ ( btn_text ) => setAttributes( { btn_text } ) }
                    />
                </div>
            </div>
	    );
    },

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save( {} ){
       
	},
} );
