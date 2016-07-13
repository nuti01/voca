import toString from '../utilities/string/to_string';
import nilDefault from '../utilities/undefined/nil_default';

/**
 * Returns the last occurrence index of `search` in `subject`.
 *
 * @function lastIndexOf
 * @static
 * @memberOf Index
 * @param {string} [subject=''] The string where to search.
 * @param {string} search The string to search.
 * @param {number} [fromIndex=subject.length - 1] The index to start searching backward in the string.
 * @return {number} Returns the last occurrence index or `-1` if not found.
 * @example
 * v.lastIndexOf('morning', 'n');
 * // => 5
 *
 * v.lastIndexOf('evening', 'o');
 * // => -1
 */
export default function(subject, search, fromIndex) {
  var subjectString = toString(nilDefault(subject, ''));
  return subjectString.lastIndexOf(search, fromIndex);
}