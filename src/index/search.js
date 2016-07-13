import toString from '../utilities/string/to_string';
import nilDefault from '../utilities/undefined/nil_default';
import clipNumber from '../utilities/number/clip_number';
import toInteger from '../utilities/number/to_integer';
import isNil from '../utilities/object/is_nil';

/**
 * Returns the first index of a `pattern` match in `subject`.
 *
 * @function search
 * @static
 * @memberOf Index
 * @param {string} [subject=''] The string where to search.
 * @param {string|RegExp} pattern The pattern to match. If `pattern` is not RegExp, it is transformed to `new RegExp(pattern)`.
 * @param {number} [fromIndex=0] The index to start searching.
 * @return {number} Returns the first match index or `-1` if not found.
 * @example
 * v.search('morning', /rn/);
 * // => 2
 *
 * v.search('evening', '/\d/');
 * // => -1
 */
export default function(subject, pattern, fromIndex) {
  var subjectString = toString(nilDefault(subject, '')),
    fromIndexNumber = isNil(fromIndex) ? 0 : clipNumber(toInteger(fromIndex), 0, subjectString.length);
  var matchIndex  = subjectString.substr(fromIndexNumber).search(pattern);
  if (matchIndex !== -1 && !isNaN(fromIndexNumber)) {
    matchIndex += fromIndexNumber;
  }
  return matchIndex;
}