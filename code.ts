// This plugin extracts all text strings from a selected frame and displays them as JSON

// This shows the HTML page in "ui.html".
figma.showUI(__html__, { width: 550, height: 650 });

// Convert string to snake_case
function toSnakeCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '_$1')
    .replace(/[\s-]+/g, '_')
    .replace(/[^a-zA-Z0-9_]/g, '')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '')
    .toLowerCase();
}

// Convert string to camelCase
function toCamelCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, '')
    .replace(/^[A-Z]/, (chr) => chr.toLowerCase());
}

// Function to recursively extract all text strings from a node
function extractStrings(node: SceneNode, result: { [key: string]: string } = {}, path: string = '', caseType: 'snake' | 'camel' = 'snake'): { [key: string]: string } {
  if (node.type === 'TEXT') {
    // Use node name as key, or generate a key based on the path
    const rawKey = node.name || `text_${path}`;
    const key = caseType === 'snake' ? toSnakeCase(rawKey) : toCamelCase(rawKey);
    result[key] = (node as TextNode).characters;
  }

  // Recursively traverse children if the node has them
  if ('children' in node) {
    node.children.forEach((child, index) => {
      const childPath = path ? `${path}.${index}` : `${index}`;
      extractStrings(child, result, childPath, caseType);
    });
  }

  return result;
}

// Function to process the current selection
function processSelection(caseType: 'snake' | 'camel' = 'snake') {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.ui.postMessage({ 
      type: 'no-selection',
      message: 'Please select a frame to extract strings from.'
    });
    return;
  }

  if (selection.length > 1) {
    figma.ui.postMessage({ 
      type: 'multiple-selection',
      message: 'Please select only one frame.'
    });
    return;
  }

  const selectedNode = selection[0];

  // Check if the selected node is a frame or has children
  if (!('children' in selectedNode)) {
    figma.ui.postMessage({ 
      type: 'invalid-selection',
      message: 'Please select a frame or group that contains text elements.'
    });
    return;
  }

  // Extract all strings from the selected frame
  const strings = extractStrings(selectedNode, {}, '', caseType);

  // Count text nodes
  const textCount = Object.keys(strings).length;

  // Send the extracted strings to the UI
  figma.ui.postMessage({ 
    type: 'strings-extracted',
    data: strings,
    frameName: selectedNode.name,
    textCount: textCount
  });
}

// Store current case type preference
let currentCaseType: 'snake' | 'camel' = 'snake';

// Process selection on plugin load
processSelection(currentCaseType);

// Listen for selection changes
figma.on('selectionchange', () => {
  processSelection(currentCaseType);
});

// Handle messages from the UI
figma.ui.onmessage = (msg: { type: string, caseType?: 'snake' | 'camel' }) => {
  if (msg.type === 'close-plugin') {
    figma.closePlugin();
  } else if (msg.type === 'case-type-changed') {
    currentCaseType = msg.caseType || 'snake';
    processSelection(currentCaseType);
  }
};
