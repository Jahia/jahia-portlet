window.jahia.i18n.loadNamespaces('jahia-portlet');

window.jahia.uiExtender.registry.add('adminRoute', 'managePortlets', {
    targets: ['administration-server-systemComponents:50'],
    label: 'jahia-portlet:label.title',
    icon: null,
    isSelectable: true,
    requiredPermission: 'adminPortlets',
    requireModuleInstalledOnSite: 'jahia-portlet',
    iframeUrl: window.contextJsParameters.contextPath + '/cms/adminframe/default/$lang/settings.managePortlets.html?redirect=false'
});
