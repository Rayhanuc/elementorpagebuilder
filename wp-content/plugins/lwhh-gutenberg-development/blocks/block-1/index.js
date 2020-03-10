// ; (function (wp) {

//     var el = wp.element.createElement;
//     var registerBlockType = wp.blocks.registerBlockType;
//     var __ = wp.i18n.__;
//     var blockStyles = {
//         backgroundColor: '#0073aa',
//         color: 'white',
//         padding: '2em 2.5em',
//         textAlign: 'center'
//     };

//     registerBlockType ( 'lwhhgd/hello-world', {

//         /*
//         Block Title
//         */

//         title: __( 'হ্যালো ওয়ার্লড' ),

//          /*
//         Block description
//         */
//        description: __('হ্যালো ওয়ার্লড একটি যুগান্তকারি বার্তা'),

//          /*
//         Block icon
//         */
//        icon: 'admin-site',

//          /*
//         Block category
//         */
//        category: 'common', // common / formatting / widgets / embed

//          /*
//         Block keywords helps to search the block
//         */
//        keywords: [ __('lwhh'), __('hello world'), __('test block') ],

         
//         // Block attribute or fields map
        
//        attributes: {
//             heading: {
//                 type: 'string',
//                 source: 'text',
//                 selector: 'h2',
//                 default: __('Hello World!') // set default value
//             },

//             excerpt: {
//                 type: 'string',
//                 source: 'text',
//                 selector: 'p',
//                 default: __('This is a simple except to show how the default property works')
//             },
//        },

//         /*
//         Block edit function works on editor
//         */

//         edit: function(props){
//             console.log(props);

//             // var setAttributes = props.setAttributes;
//             // var attributes = props.attributes;
//             // var className = props.className;

//             return el('h2', {style: blockStyles}, 'Hello World!')
//         },

//         /*
//         Block save function works for output
//         */

//         save: function(props){
//             console.log(props);

//             // var setAttributes = props.setAttributes;
//             // var attributes = props.attributes;

//             return el('h2', {style: blockStyles}, 'Hello World!')
//         },

//     });

// })();




// class ৩.৪ - জাভাস্ক্রিপ্ট এপিআই ফাংশন - registerBlockType
const { createElement } = wp.element;
const { registerBlockType } = wp.blocks;

const { __ } = wp.i18n;

registerBlockType('lwhhgd/hello-world',
{
    title: __('Hello World'),
    description: __('This is Hello World Block'),
    category: 'lwhhgd',
    // Another way to include icon
    icon: {
        src: 'admin-tools',
        background: 'tomato',
        foreground: 'white'
    },
    keyworld: [
        __('hello world'),
        __('dummy block'),
        __('lwhh')
    ],
    attributes: {},
    style: [
        {},
        {}
    ],
    transforms: {},
    supports: {
        align: true,
        alignWide: false,
        // align: ['left', 'center', 'right'],
        anchor: true,
        // customClassName: false,
        // className: false,
        // html: false,
        // inserter: false
        
        // multiple: false
        reusable: false
    },
    edit() {
        return createElement('h2', {}, 'Hello World');
    },
    save() {
        return createElement('h2', {}, 'Hello World is coming from save function.');
    }
});