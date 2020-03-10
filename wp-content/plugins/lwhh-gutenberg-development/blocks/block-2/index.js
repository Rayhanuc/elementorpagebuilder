
; (function (wp) {
const { createElement } = wp.element;
const { registerBlockType } = wp.blocks;

const { __ } = wp.i18n;

function hasStyle(className) {
    return (className && (
        className.includes('is-style-rounded') ||
        className.includes('is-style-outline')
    ));
}

registerBlockType('lwhhgd/btn',
{
    title: __('Button'),
    description: __('This is a simple button Block'),
    category: 'lwhhgd',
    icon: 'editor-removeformatting',
    keyworld: [
        __('btn'),
        __('button'),
    ],
    attributes: {},
    styles: [
        {
            name: 'rounded',
            label: __('Rounded'),
            isDefault: true
        },
        {
            name: 'outline',
            label: __('Outline'),
        },
    ],
    /* transforms: {},
    supports: {}, */
    edit( {className} ) {
        hasStyle(className) || (className += ' is-style-rounded');
        return createElement('a', {className: className}, 'Button');
    },
    save( {className} ) {
        hasStyle(className) || (className += ' is-style-rounded');
        return createElement('a', {}, 'Button');
    }
});

}(window.wp));