"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var generate = require("./generate/generate");
var scripts = require("./scripts/scripts");
var commands = {
    Generate: generate,
    Scripts: scripts,
};
var command = {
    name: 'react-native-scripts-cli',
    run: function (toolbox) { return __awaiter(void 0, void 0, void 0, function () {
        var prompt, command;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    prompt = toolbox.prompt;
                    return [4 /*yield*/, prompt.ask({
                            type: 'select',
                            name: 'command',
                            choices: Object.keys(commands),
                            message: 'What do you want 🤷‍♂️',
                        })];
                case 1:
                    command = (_a.sent()).command;
                    commands[command].run(toolbox);
                    return [2 /*return*/];
            }
        });
    }); },
};
module.exports = command;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtbmF0aXZlLXNjcmlwdHMtY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3JlYWN0LW5hdGl2ZS1zY3JpcHRzLWNsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDhDQUErQztBQUMvQywyQ0FBNEM7QUFJNUMsSUFBTSxRQUFRLEdBQXFEO0lBQ2pFLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLE9BQU8sRUFBRSxPQUFPO0NBQ2pCLENBQUE7QUFFRCxJQUFNLE9BQU8sR0FBbUI7SUFDOUIsSUFBSSxFQUFFLDBCQUEwQjtJQUNoQyxHQUFHLEVBQUUsVUFBTyxPQUFPOzs7OztvQkFDVCxNQUFNLEdBQUssT0FBTyxPQUFaLENBQVk7b0JBRU4scUJBQU0sTUFBTSxDQUFDLEdBQUcsQ0FBc0I7NEJBQ3hELElBQUksRUFBRSxRQUFROzRCQUNkLElBQUksRUFBRSxTQUFTOzRCQUNmLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzs0QkFDOUIsT0FBTyxFQUFFLHdCQUF3Qjt5QkFDbEMsQ0FBQyxFQUFBOztvQkFMTSxPQUFPLEdBQUssQ0FBQSxTQUtsQixDQUFBLFFBTGE7b0JBT2YsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTs7OztTQUMvQjtDQUNGLENBQUE7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQSJ9