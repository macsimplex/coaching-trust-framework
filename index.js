const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

/**
 * List available declinations (e.g. ['ctf-icf'])
 */
function listDeclinations() {
  const dir = path.join(ROOT, 'declinations');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(d =>
    d.startsWith('ctf-') && fs.statSync(path.join(dir, d)).isDirectory()
  );
}

/**
 * Load all behavioral layers for a declination.
 * Returns an object { 'KB-A-ethics.md': '...content...', ... }
 */
function loadLayers(declination) {
  const dir = path.join(ROOT, 'declinations', declination, 'layers');
  if (!fs.existsSync(dir)) return {};
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md')).sort();
  const result = {};
  for (const f of files) {
    result[f] = fs.readFileSync(path.join(dir, f), 'utf8');
  }
  return result;
}

/**
 * Load all layers concatenated as a single string (ready for system prompt injection).
 */
function loadLayersText(declination) {
  const layers = loadLayers(declination);
  return Object.entries(layers)
    .map(([name, content]) => `## ${name}\n\n${content}`)
    .join('\n\n---\n\n');
}

/**
 * Load a tool's system prompt for a declination.
 * tool: 'designer' | 'test-plan' | 'robustness' | 'audit' | 'config'
 */
function loadToolPrompt(declination, tool) {
  const filePath = path.join(ROOT, 'declinations', declination, 'tools', `ctf-${tool}`, 'system-prompt.md');
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
}

/**
 * Load a core tool's system prompt (universal process, not declination-specific).
 * tool: 'designer' | 'test-plan' | 'robustness' | 'audit' | 'config' | 'translator' | 'converger'
 */
function loadCoreToolPrompt(tool) {
  const filePath = path.join(ROOT, 'tools', `ctf-${tool}`, 'system-prompt.md');
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
}

/**
 * Load the CTF Core normative document.
 */
function loadCore() {
  const filePath = path.join(ROOT, 'document', 'ctf-v1.0.md');
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
}

/**
 * Load the ICF mapping table for a declination.
 */
function loadMapping(declination) {
  const filePath = path.join(ROOT, 'declinations', declination, 'mapping.md');
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
}

/**
 * Load the pipeline reference document.
 */
function loadPipelineDoc() {
  const filePath = path.join(ROOT, 'tools', 'PIPELINE.md');
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
}

/**
 * Load the best practices document.
 */
function loadBestPractices() {
  const filePath = path.join(ROOT, 'tools', 'ctf-config', 'best-practices.md');
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
}

/**
 * Load the universal test categories.
 */
function loadTestCategories() {
  const filePath = path.join(ROOT, 'tools', 'ctf-test-plan', 'test-categories.md');
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
}

/**
 * Load the robustness evaluation axes.
 */
function loadEvaluationAxes() {
  const filePath = path.join(ROOT, 'tools', 'ctf-robustness', 'evaluation-axes.md');
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
}

/**
 * List all tool KB files for a declination's designer.
 * Returns an object { 'contract-explained.md': '...', ... }
 */
function loadDesignerKB(declination) {
  const dir = path.join(ROOT, 'declinations', declination, 'tools', 'ctf-designer', 'kb');
  if (!fs.existsSync(dir)) return {};
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  const result = {};
  for (const f of files) {
    result[f] = fs.readFileSync(path.join(dir, f), 'utf8');
  }
  return result;
}

module.exports = {
  ROOT,
  listDeclinations,
  loadLayers,
  loadLayersText,
  loadToolPrompt,
  loadCoreToolPrompt,
  loadCore,
  loadMapping,
  loadPipelineDoc,
  loadBestPractices,
  loadTestCategories,
  loadEvaluationAxes,
  loadDesignerKB,
};
