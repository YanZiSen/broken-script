// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import BrokenScriptListener from './BrokenScriptListener.js';
import BrokenScriptVisitor from './BrokenScriptVisitor.js';

const serializedATN = [4,1,24,121,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,1,0,1,1,5,1,30,8,1,10,1,12,1,33,9,1,1,2,1,2,1,2,1,2,1,2,1,2,3,2,41,8,
2,1,3,1,3,4,3,45,8,3,11,3,12,3,46,1,3,1,3,1,4,1,4,1,4,1,4,1,4,3,4,56,8,4,
1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,3,7,68,8,7,1,7,1,7,3,7,72,8,7,1,
7,1,7,3,7,76,8,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,5,9,86,8,9,10,9,12,9,89,
9,9,1,10,1,10,1,10,3,10,94,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,5,11,108,8,11,10,11,12,11,111,9,11,1,12,1,12,1,12,1,
12,1,12,1,12,3,12,119,8,12,1,12,0,1,22,13,0,2,4,6,8,10,12,14,16,18,20,22,
24,0,3,1,0,9,12,1,0,14,17,2,0,13,13,18,19,125,0,26,1,0,0,0,2,31,1,0,0,0,
4,40,1,0,0,0,6,42,1,0,0,0,8,50,1,0,0,0,10,57,1,0,0,0,12,61,1,0,0,0,14,65,
1,0,0,0,16,79,1,0,0,0,18,82,1,0,0,0,20,90,1,0,0,0,22,95,1,0,0,0,24,118,1,
0,0,0,26,27,3,2,1,0,27,1,1,0,0,0,28,30,3,4,2,0,29,28,1,0,0,0,30,33,1,0,0,
0,31,29,1,0,0,0,31,32,1,0,0,0,32,3,1,0,0,0,33,31,1,0,0,0,34,41,3,6,3,0,35,
41,3,8,4,0,36,41,3,12,6,0,37,41,3,16,8,0,38,41,3,22,11,0,39,41,5,24,0,0,
40,34,1,0,0,0,40,35,1,0,0,0,40,36,1,0,0,0,40,37,1,0,0,0,40,38,1,0,0,0,40,
39,1,0,0,0,41,5,1,0,0,0,42,44,5,22,0,0,43,45,3,4,2,0,44,43,1,0,0,0,45,46,
1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,48,1,0,0,0,48,49,5,23,0,0,49,7,1,
0,0,0,50,51,5,2,0,0,51,52,3,10,5,0,52,55,3,6,3,0,53,54,5,3,0,0,54,56,3,6,
3,0,55,53,1,0,0,0,55,56,1,0,0,0,56,9,1,0,0,0,57,58,5,20,0,0,58,59,3,22,11,
0,59,60,5,21,0,0,60,11,1,0,0,0,61,62,5,4,0,0,62,63,3,14,7,0,63,64,3,6,3,
0,64,13,1,0,0,0,65,67,5,20,0,0,66,68,3,16,8,0,67,66,1,0,0,0,67,68,1,0,0,
0,68,69,1,0,0,0,69,71,5,24,0,0,70,72,3,22,11,0,71,70,1,0,0,0,71,72,1,0,0,
0,72,73,1,0,0,0,73,75,5,24,0,0,74,76,3,22,11,0,75,74,1,0,0,0,75,76,1,0,0,
0,76,77,1,0,0,0,77,78,5,21,0,0,78,15,1,0,0,0,79,80,5,5,0,0,80,81,3,18,9,
0,81,17,1,0,0,0,82,87,3,20,10,0,83,84,5,1,0,0,84,86,3,20,10,0,85,83,1,0,
0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,19,1,0,0,0,89,87,1,0,0,
0,90,93,5,7,0,0,91,92,5,13,0,0,92,94,3,22,11,0,93,91,1,0,0,0,93,94,1,0,0,
0,94,21,1,0,0,0,95,96,6,11,-1,0,96,97,3,24,12,0,97,109,1,0,0,0,98,99,10,
3,0,0,99,100,7,0,0,0,100,108,3,22,11,4,101,102,10,2,0,0,102,103,7,1,0,0,
103,108,3,22,11,3,104,105,10,1,0,0,105,106,7,2,0,0,106,108,3,22,11,2,107,
98,1,0,0,0,107,101,1,0,0,0,107,104,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,
0,109,110,1,0,0,0,110,23,1,0,0,0,111,109,1,0,0,0,112,113,5,20,0,0,113,114,
3,22,11,0,114,115,5,21,0,0,115,119,1,0,0,0,116,119,5,6,0,0,117,119,5,7,0,
0,118,112,1,0,0,0,118,116,1,0,0,0,118,117,1,0,0,0,119,25,1,0,0,0,12,31,40,
46,55,67,71,75,87,93,107,109,118];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class BrokenScriptParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "','", "'if'", "'else'", "'for'", "'let'", 
                            null, null, null, "'+'", "'-'", "'*'", "'/'", 
                            "'='", "'>'", "'<'", "'<='", "'>='", "'+='", 
                            "'-='", "'('", "')'", "'{'", "'}'", "';'" ];
    static symbolicNames = [ null, null, "If", "Else", "For", "VarType", 
                             "IntLiteral", "Identifier", "WhiteSpaces", 
                             "ADD", "SUB", "MUL", "DIV", "ASSIGN", "GT", 
                             "LT", "LE", "GE", "ADD_ASSIGN", "SUB_ASSIGN", 
                             "LPAREN", "RPAREN", "LBRACE", "RBRACE", "SEMI" ];
    static ruleNames = [ "program", "statements", "statement", "block", 
                         "ifStatement", "parExpression", "forStatement", 
                         "forExpressionList", "variableStatement", "variableDeclareList", 
                         "variableDeclare", "expression", "primary" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BrokenScriptParser.ruleNames;
        this.literalNames = BrokenScriptParser.literalNames;
        this.symbolicNames = BrokenScriptParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 11:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		case 1:
    			return this.precpred(this._ctx, 2);
    		case 2:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, BrokenScriptParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.statements();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statements() {
	    let localctx = new StatementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, BrokenScriptParser.RULE_statements);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 22020340) !== 0)) {
	            this.state = 28;
	            this.statement();
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BrokenScriptParser.RULE_statement);
	    try {
	        this.state = 40;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.block();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.ifStatement();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 36;
	            this.forStatement();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 37;
	            this.variableStatement();
	            break;
	        case 6:
	        case 7:
	        case 20:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 38;
	            localctx.expressionStatement = this.expression(0);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 39;
	            this.match(BrokenScriptParser.SEMI);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, BrokenScriptParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(BrokenScriptParser.LBRACE);
	        this.state = 44; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 43;
	            this.statement();
	            this.state = 46; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & 22020340) !== 0));
	        this.state = 48;
	        this.match(BrokenScriptParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, BrokenScriptParser.RULE_ifStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(BrokenScriptParser.If);
	        this.state = 51;
	        this.parExpression();
	        this.state = 52;
	        this.block();
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 53;
	            this.match(BrokenScriptParser.Else);
	            this.state = 54;
	            this.block();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parExpression() {
	    let localctx = new ParExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, BrokenScriptParser.RULE_parExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(BrokenScriptParser.LPAREN);
	        this.state = 58;
	        this.expression(0);
	        this.state = 59;
	        this.match(BrokenScriptParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, BrokenScriptParser.RULE_forStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(BrokenScriptParser.For);
	        this.state = 62;
	        this.forExpressionList();
	        this.state = 63;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forExpressionList() {
	    let localctx = new ForExpressionListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, BrokenScriptParser.RULE_forExpressionList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(BrokenScriptParser.LPAREN);
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 66;
	            localctx.forInit = this.variableStatement();
	        }

	        this.state = 69;
	        this.match(BrokenScriptParser.SEMI);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 1048768) !== 0)) {
	            this.state = 70;
	            this.expression(0);
	        }

	        this.state = 73;
	        this.match(BrokenScriptParser.SEMI);
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 1048768) !== 0)) {
	            this.state = 74;
	            localctx.forUpdate = this.expression(0);
	        }

	        this.state = 77;
	        this.match(BrokenScriptParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableStatement() {
	    let localctx = new VariableStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, BrokenScriptParser.RULE_variableStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(BrokenScriptParser.VarType);
	        this.state = 80;
	        this.variableDeclareList();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclareList() {
	    let localctx = new VariableDeclareListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, BrokenScriptParser.RULE_variableDeclareList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.variableDeclare();
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 83;
	            this.match(BrokenScriptParser.T__0);
	            this.state = 84;
	            this.variableDeclare();
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclare() {
	    let localctx = new VariableDeclareContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, BrokenScriptParser.RULE_variableDeclare);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(BrokenScriptParser.Identifier);
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 91;
	            this.match(BrokenScriptParser.ASSIGN);
	            this.state = 92;
	            this.expression(0);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, BrokenScriptParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.primary();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 109;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 107;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, BrokenScriptParser.RULE_expression);
	                    this.state = 98;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 99;
	                    localctx.bop = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 7680) !== 0))) {
	                        localctx.bop = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 100;
	                    this.expression(4);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, BrokenScriptParser.RULE_expression);
	                    this.state = 101;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 102;
	                    localctx.bop = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 245760) !== 0))) {
	                        localctx.bop = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 103;
	                    this.expression(3);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, BrokenScriptParser.RULE_expression);
	                    this.state = 104;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 105;
	                    localctx.bop = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 794624) !== 0))) {
	                        localctx.bop = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 106;
	                    this.expression(2);
	                    break;

	                } 
	            }
	            this.state = 111;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, BrokenScriptParser.RULE_primary);
	    try {
	        this.state = 118;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 112;
	            this.match(BrokenScriptParser.LPAREN);
	            this.state = 113;
	            this.expression(0);
	            this.state = 114;
	            this.match(BrokenScriptParser.RPAREN);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 116;
	            this.match(BrokenScriptParser.IntLiteral);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 117;
	            this.match(BrokenScriptParser.Identifier);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

BrokenScriptParser.EOF = antlr4.Token.EOF;
BrokenScriptParser.T__0 = 1;
BrokenScriptParser.If = 2;
BrokenScriptParser.Else = 3;
BrokenScriptParser.For = 4;
BrokenScriptParser.VarType = 5;
BrokenScriptParser.IntLiteral = 6;
BrokenScriptParser.Identifier = 7;
BrokenScriptParser.WhiteSpaces = 8;
BrokenScriptParser.ADD = 9;
BrokenScriptParser.SUB = 10;
BrokenScriptParser.MUL = 11;
BrokenScriptParser.DIV = 12;
BrokenScriptParser.ASSIGN = 13;
BrokenScriptParser.GT = 14;
BrokenScriptParser.LT = 15;
BrokenScriptParser.LE = 16;
BrokenScriptParser.GE = 17;
BrokenScriptParser.ADD_ASSIGN = 18;
BrokenScriptParser.SUB_ASSIGN = 19;
BrokenScriptParser.LPAREN = 20;
BrokenScriptParser.RPAREN = 21;
BrokenScriptParser.LBRACE = 22;
BrokenScriptParser.RBRACE = 23;
BrokenScriptParser.SEMI = 24;

BrokenScriptParser.RULE_program = 0;
BrokenScriptParser.RULE_statements = 1;
BrokenScriptParser.RULE_statement = 2;
BrokenScriptParser.RULE_block = 3;
BrokenScriptParser.RULE_ifStatement = 4;
BrokenScriptParser.RULE_parExpression = 5;
BrokenScriptParser.RULE_forStatement = 6;
BrokenScriptParser.RULE_forExpressionList = 7;
BrokenScriptParser.RULE_variableStatement = 8;
BrokenScriptParser.RULE_variableDeclareList = 9;
BrokenScriptParser.RULE_variableDeclare = 10;
BrokenScriptParser.RULE_expression = 11;
BrokenScriptParser.RULE_primary = 12;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BrokenScriptParser.RULE_program;
    }

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BrokenScriptVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BrokenScriptParser.RULE_statements;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.enterStatements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.exitStatements(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BrokenScriptVisitor ) {
	        return visitor.visitStatements(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BrokenScriptParser.RULE_statement;
        this.expressionStatement = null; // ExpressionContext
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	variableStatement() {
	    return this.getTypedRuleContext(VariableStatementContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMI() {
	    return this.getToken(BrokenScriptParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BrokenScriptVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BrokenScriptParser.RULE_block;
    }

	LBRACE() {
	    return this.getToken(BrokenScriptParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(BrokenScriptParser.RBRACE, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BrokenScriptVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BrokenScriptParser.RULE_ifStatement;
    }

	If() {
	    return this.getToken(BrokenScriptParser.If, 0);
	};

	parExpression() {
	    return this.getTypedRuleContext(ParExpressionContext,0);
	};

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	Else() {
	    return this.getToken(BrokenScriptParser.Else, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BrokenScriptVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BrokenScriptParser.RULE_parExpression;
    }

	LPAREN() {
	    return this.getToken(BrokenScriptParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(BrokenScriptParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.enterParExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.exitParExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BrokenScriptVisitor ) {
	        return visitor.visitParExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BrokenScriptParser.RULE_forStatement;
    }

	For() {
	    return this.getToken(BrokenScriptParser.For, 0);
	};

	forExpressionList() {
	    return this.getTypedRuleContext(ForExpressionListContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.exitForStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BrokenScriptVisitor ) {
	        return visitor.visitForStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForExpressionListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BrokenScriptParser.RULE_forExpressionList;
        this.forInit = null; // VariableStatementContext
        this.forUpdate = null; // ExpressionContext
    }

	LPAREN() {
	    return this.getToken(BrokenScriptParser.LPAREN, 0);
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BrokenScriptParser.SEMI);
	    } else {
	        return this.getToken(BrokenScriptParser.SEMI, i);
	    }
	};


	RPAREN() {
	    return this.getToken(BrokenScriptParser.RPAREN, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	variableStatement() {
	    return this.getTypedRuleContext(VariableStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.enterForExpressionList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.exitForExpressionList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BrokenScriptVisitor ) {
	        return visitor.visitForExpressionList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BrokenScriptParser.RULE_variableStatement;
    }

	VarType() {
	    return this.getToken(BrokenScriptParser.VarType, 0);
	};

	variableDeclareList() {
	    return this.getTypedRuleContext(VariableDeclareListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.enterVariableStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.exitVariableStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BrokenScriptVisitor ) {
	        return visitor.visitVariableStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableDeclareListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BrokenScriptParser.RULE_variableDeclareList;
    }

	variableDeclare = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableDeclareContext);
	    } else {
	        return this.getTypedRuleContext(VariableDeclareContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.enterVariableDeclareList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.exitVariableDeclareList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BrokenScriptVisitor ) {
	        return visitor.visitVariableDeclareList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableDeclareContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BrokenScriptParser.RULE_variableDeclare;
    }

	Identifier() {
	    return this.getToken(BrokenScriptParser.Identifier, 0);
	};

	ASSIGN() {
	    return this.getToken(BrokenScriptParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.enterVariableDeclare(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.exitVariableDeclare(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BrokenScriptVisitor ) {
	        return visitor.visitVariableDeclare(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BrokenScriptParser.RULE_expression;
        this.bop = null; // Token
    }

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	ADD() {
	    return this.getToken(BrokenScriptParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(BrokenScriptParser.SUB, 0);
	};

	MUL() {
	    return this.getToken(BrokenScriptParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(BrokenScriptParser.DIV, 0);
	};

	GT() {
	    return this.getToken(BrokenScriptParser.GT, 0);
	};

	GE() {
	    return this.getToken(BrokenScriptParser.GE, 0);
	};

	LT() {
	    return this.getToken(BrokenScriptParser.LT, 0);
	};

	LE() {
	    return this.getToken(BrokenScriptParser.LE, 0);
	};

	ASSIGN() {
	    return this.getToken(BrokenScriptParser.ASSIGN, 0);
	};

	ADD_ASSIGN() {
	    return this.getToken(BrokenScriptParser.ADD_ASSIGN, 0);
	};

	SUB_ASSIGN() {
	    return this.getToken(BrokenScriptParser.SUB_ASSIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BrokenScriptVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BrokenScriptParser.RULE_primary;
    }

	LPAREN() {
	    return this.getToken(BrokenScriptParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(BrokenScriptParser.RPAREN, 0);
	};

	IntLiteral() {
	    return this.getToken(BrokenScriptParser.IntLiteral, 0);
	};

	Identifier() {
	    return this.getToken(BrokenScriptParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BrokenScriptListener ) {
	        listener.exitPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BrokenScriptVisitor ) {
	        return visitor.visitPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




BrokenScriptParser.ProgramContext = ProgramContext; 
BrokenScriptParser.StatementsContext = StatementsContext; 
BrokenScriptParser.StatementContext = StatementContext; 
BrokenScriptParser.BlockContext = BlockContext; 
BrokenScriptParser.IfStatementContext = IfStatementContext; 
BrokenScriptParser.ParExpressionContext = ParExpressionContext; 
BrokenScriptParser.ForStatementContext = ForStatementContext; 
BrokenScriptParser.ForExpressionListContext = ForExpressionListContext; 
BrokenScriptParser.VariableStatementContext = VariableStatementContext; 
BrokenScriptParser.VariableDeclareListContext = VariableDeclareListContext; 
BrokenScriptParser.VariableDeclareContext = VariableDeclareContext; 
BrokenScriptParser.ExpressionContext = ExpressionContext; 
BrokenScriptParser.PrimaryContext = PrimaryContext; 
