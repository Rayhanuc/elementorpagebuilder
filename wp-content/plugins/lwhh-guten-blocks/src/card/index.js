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
const { 
    RichText, 
    InspectorControls
} = wp.editor;
const { 
    PanelBody,
    SelectControl
} = wp.components;

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

        label_position: {
            type: 'string',
            default: 'top-right'
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
        const {
            title, 
            content, 
            user, 
            date, 
            btn_text, 
            label_position
        } = attributes;

        return (
            <div className="single-blog-box">
                <InspectorControls>
                    <PanelBody
                        title={__('Image')}
                        initialOpen={true}
                    >
                        <SelectControl
                            label={ __( 'Label Position' ) }
                            value={ label_position }
                            onChange={ ( position ) => setAttributes({label_position:position}) }
                            options={ [
                                { value: 'top-left', label: 'Top Left' },
                                { value: 'top-center', label: 'Top Center' },
                                { value: 'top-right', label: 'Top Right' },
                                { value: 'middle-left', label: 'Middle Left' },
                                { value: 'middle-center', label: 'Middle Center' },
                                { value: 'middle-right', label: 'Middle Right' },
                                { value: 'bottom-left', label: 'Bottom Left' },
                                { value: 'bottom-center', label: 'Bottom Center' },
                                { value: 'bottom-right', label: 'Bottom Right' },
                            ] }
                        />
                        
                    </PanelBody>
                </InspectorControls>
                

                    <div className="blog-box-bg blog-box-bg-1"></div>
                    <div className={`blog-box-content ${label_position}`} >
                        <p className="blog-meta">
                            <span><a href="#"><i className="fa fa-user"></i> 
                            <RichText
                                value={ user }
                                multiline={false}
                                placeholder={__('Add your card user')}
                                onChange={ ( user ) => setAttributes( { user } ) }
                                keepPlaceholderOnFocus={true}
                            />
                            </a></span>
                            <span><i className="fa fa-calendar"></i> 
                            <RichText
                                value={ date }
                                multiline={false}
                                placeholder={__('Add your card date')}
                                onChange={ ( date ) => setAttributes( { date } ) }
                                keepPlaceholderOnFocus={true}
                            />
                            </span>
                        </p>

                        <h3>
                            <RichText
                                value={ title }
                                multiline={false}
                                placeholder={__('Add your card title')}
                                onChange={ ( title ) => setAttributes( { title } ) }
                                keepPlaceholderOnFocus={true}
                            />
                        </h3>

                        <p>
                            <RichText
                                value={ content }
                                multiline={false}
                                placeholder={__('Add your card content')}
                                onChange={ ( content ) => setAttributes( { content } ) }
                                keepPlaceholderOnFocus={true}
                            />
                        </p>

                        <a href="#" className="blog-readmore-btn">
                            <RichText
                                value={ btn_text }
                                multiline={false}
                                placeholder={__('label')}
                                onChange={ ( btn_text ) => setAttributes( { btn_text } ) }
                                keepPlaceholderOnFocus={true}
                            />
                        </a>
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
