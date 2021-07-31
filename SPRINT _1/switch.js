var nilai = prompt(`masukkan nilai`);
var grade = ``;

switch(true) {
    case nilai > 90 :
        grade = `A`;
        break;
        case nilai > 80 :
            grade = `B+`;
            break;
            case nilai > 70 :
                grade = `B`
                break;
                default :
                grade = `F`
                break;
}
document.write(grade);