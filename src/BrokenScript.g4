grammar BrokenScript;

program
  : statements
  ;

statements
  : statement*
  ;

statement
  : block
  | ifStatement
  | forStatement
  | variableStatement
  | expressionStatement=expression
  | ';'
  ;

block
  : '{' statement+ '}'
  ;

ifStatement
  : If parExpression block (Else block)?
  ;

parExpression
  : '(' expression ')'
  ;

forStatement
  : For forExpressionList block;

forExpressionList:
  '(' forInit=variableStatement? ';' forControl=expression? ';' forUpdate=expression? ')' // 起个别名区分这几个表达式
  ;

variableStatement
  : VarType variableDeclareList 
  ;

variableDeclareList
  : variableDeclare (',' variableDeclare)*
  ;
variableDeclare
  : Identifier ('='expression)?
  ;

expression
  : primary
  | expression bop=('*'|'/') expression
  | expression bop=('+'|'-') expression
  | expression bop=('>'|'>='|'<'|'<=') expression
  | expression bop=('='|'+='|'-=') expression
  ;

primary
  : '(' expression ')'
  | IntLiteral
  | Identifier
  ;

If: 'if';

Else: 'else';

For: 'for';

VarType: 'let';

IntLiteral
  : '0' | [1-9][0-9]*
  ;

Identifier
  : [a-zA-Z_][a-zA-Z0-9]*
  ;

WhiteSpaces: [\t\n\u000B\u000C\u0020\u00A0] -> skip;

// 符号
ADD:                '+';
SUB:                '-';
MUL:                '*';
DIV:                '/';
ASSIGN:             '=';
GT:                 '>';
LT:                 '<';
LE:                 '<=';
GE:                 '>=';
ADD_ASSIGN:         '+=';
SUB_ASSIGN:         '-=';
LPAREN:             '(';
RPAREN:             ')';
LBRACE:             '{';
RBRACE:             '}';
SEMI:               ';';
