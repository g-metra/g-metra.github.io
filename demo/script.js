// datetime region
let current_date = new Date();
const date_arr = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
const date_arr_digit = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
let current_day = current_date.getDate();
let current_month = current_date.getMonth();
let current_year = current_date.getFullYear();
let today = "сегодня " + current_day + " " + date_arr[current_month] + " " + current_year;
let header_datetime = document.getElementById("current_datetime");
header_datetime.innerHTML = today

let time = current_date.getHours() + ":" + current_date.getMinutes();

// variableS
const popupOverlay = document.getElementById("popup-overlay");
const popup = document.getElementById("popup");
const passport_view = document.getElementById("display_pass");
let getEngineer = document.getElementById("push_select");
let setEngineer = document.getElementById("boss");
let getSlitok = document.getElementById("slitok");
let setSlitok = document.getElementById("slitochek");
let getPassNum = document.getElementById("number_of_pass");
let setPassNum = document.getElementById("numberPassport");
let getMaterial = document.getElementById("material_select");
let setMaterial = document.getElementById("material_index");
let getParts = document.getElementById("part_name");
let setParts = document.getElementById("part_index");
let getTtp = document.getElementById("ttp_tp");
let setTtp = document.getElementById("ttptp");

let treeStack = document.getElementById("tree_sandbox");
let treeItemHead = document.createElement("p");

let chronologyStack = document.getElementById("chronology_sandbox");
let chronologyItem = document.createElement("p");

let numberSmesi = "-";

let ingeneerPushed;

function passportLoadInfo() {
  setSlitok.innerHTML = getSlitok.value;
  setPassNum.innerHTML = getPassNum.value;
  setParts.innerHTML = getParts.value;
  setTtp.innerHTML = getTtp.value;

  if (getEngineer.value == "brat") {
      setEngineer.innerHTML = "Ответственный за запись технологических операций: Иванов И.И.";
      engeneerPushed = "Иванов"
  } else if (getEngineer.value == "hitov") {
      setEngineer.innerHTML = "Ответственный за запись технологических операций: Артемов А.А.";
      engeneerPushed = "Артемов"
  } else {
      setEngineer.innerHTML = "Ответственный за запись технологических операций: Путин В.В.";
      engeneerPushed = "Путин"
  }

  if (getMaterial.value == "sm2") {
      setMaterial.innerHTML = "КС-522";
      treeItemHead.innerHTML = "Sm1Co6";
      treeItemHead.id = "element_material";
      treeStack.appendChild(treeItemHead);

      treeItemHead = document.createElement("p")
      treeItemHead.innerHTML = "№ " + getPassNum.value + " | " + getParts.value + " | смесь: " + numberSmesi;
      treeItemHead.id = "element_pass";
      treeStack.appendChild(treeItemHead);

      chronologyItem.innerHTML = "✅ " + engeneerPushed + " " + current_day + "." + date_arr_digit[current_month] + "." + current_year + " в " + time + " > выпуск";
      chronologyItem.id = "chronology_item";
      chronologyStack.appendChild(chronologyItem);
  } else if (getMaterial.value == "co5") {
      setMaterial.innerHTML = "КС-733";
      treeItemHead.innerHTML = "SmCo733";
      treeItemHead.id = "element_material";
      treeStack.appendChild(treeItemHead);

      treeItemHead = document.createElement("p")
      treeItemHead.innerHTML = "№ " + getPassNum.value + " | " + getParts.value + " | смесь: " + numberSmesi;
      treeItemHead.id = "element_pass";
      treeStack.appendChild(treeItemHead);

      chronologyItem.innerHTML = "✅ " + engeneerPushed + " " + current_day + "." + date_arr_digit[current_month] + "." + current_year + " в " + time + " > выпуск";
      chronologyItem.id = "chronology_item";
      chronologyStack.appendChild(chronologyItem);
  } else {
      setMaterial.innerHTML = "USOC-12";
      treeItemHead.innerHTML = "USOC-12";
      treeItemHead.id = "element_material";
      treeStack.appendChild(treeItemHead);

      treeItemHead = document.createElement("p")
      treeItemHead.innerHTML = "№ " + getPassNum.value + " | " + getParts.value + " | смесь: " + numberSmesi;
      treeItemHead.id = "element_pass";
      treeStack.appendChild(treeItemHead);

      chronologyItem.innerHTML = "✅ " + engeneerPushed + " " + current_day + "." + date_arr_digit[current_month] + "." + current_year + " в " + time + " > выпуск";
      chronologyItem.id = "chronology_item";
      chronologyStack.appendChild(chronologyItem);
  }

}

// OVERLAY

function showPopup() {
  popupOverlay.style.display = "block";
}

function hidePopup() {
  popupOverlay.style.display = "none";
  // passport display
  passport_view.style.display = "contents";
  passportLoadInfo();
}

popupOverlay.addEventListener("click", hidePopup);
popup.addEventListener("click", (event) => event.stopPropagation());

// APPARAT DIALOG

const apparatDialog = document.getElementById("apparat_dialog");
const apparatPopup = document.getElementById("apparat_popup");

const apparatFinal = document.getElementById("apparat_final");
const pressFinal = document.getElementById("press_final");
const termoFinal_spec = document.getElementById("termoFinal_spec");
const termoFinal_vto = document.getElementById("termoFinal_vto");
const termoFinal_nto = document.getElementById("termoFinal_nto");
const controlFinal_1 = document.getElementById("control_final_1");
const controlFinal_2 = document.getElementById("control_final_2");

let apparatTrigger = 0;
let pressTrigger = 0;
let termoTrigger_1 = 0;
let termoTrigger_2 = 0;
let termoTrigger_3 = 0;
let controlTrigger_1 = 0;
let controlTrigger_2 = 0;
let operatorStorage;

let operatorName;
let setOperatorName;
let finalOperator;

let operatorDate;

let nameOperation = document.getElementById("name_operation");

let startElementDialog = document.getElementById("start_elements_dialog");

// apparat values
let generalMass = document.getElementById("general_mass");
let finalMass = document.getElementById("final_mass");
let timePomol = document.getElementById("time_pomol");

// press-man values
let countPart = document.getElementById("count_part");
let factPart = document.getElementById("fact_part");
let badPart = document.getElementById("bad_part");
let infoParts = document.getElementById("info_parts");

// termo value
// spec
let countPartSpec = document.getElementById("count_part_spec");
let countSadkaSpec = document.getElementById("count_sadka_spec");
// vto
let countPartVto = document.getElementById("count_part_vto");
let countSadkaVto = document.getElementById("count_sadka_vto");
// nto
let countPartNto = document.getElementById("count_part_nto");
let countSadkaNto = document.getElementById("count_sadka_nto");
// control_1
let countControl_1 = document.getElementById("count_control_part_1");
let goodControl_1 = document.getElementById("good_part_control_1");
let badControl_1 = document.getElementById("bad_control_1");
//control_2
let countControl_2 = document.getElementById("count_control_part_2");
let goodControl_2 = document.getElementById("good_part_control_2");
let badControl_2 = document.getElementById("bad_control_2");


function showApparat(who_is) {
    if (who_is == "apparat") {
        if (apparatTrigger == 0) {
            termoFinal_spec.style.display = "none"
            termoFinal_vto.style.display = "none";
            startElementDialog.style.display = "contents";
            operatorStorage = who_is;
            nameOperation.innerHTML = "Операция подготовки"
            pressFinal.style.display = "none";
            apparatFinal.style.display = "none";
            termoFinal_nto.style.display = "none";
            controlFinal_1.style.display = "none";
            controlFinal_2.style.display = "none";
        } else {
            apparatFinal.style.display = "contents";
            pressFinal.style.display = "none";
            termoFinal_spec.style.display = "none"
            termoFinal_vto.style.display = "none";
            termoFinal_nto.style.display = "none";
            controlFinal_1.style.display = "none";
            controlFinal_2.style.display = "none";
        }
    } else if (who_is == "press_man") {
        if (pressTrigger == 0) {
            termoFinal_vto.style.display = "none";
            termoFinal_spec.style.display = "none"
            apparatFinal.style.display = "none";
            startElementDialog.style.display = "contents";
            operatorStorage = who_is;
            nameOperation.innerHTML = "Операция прессования";
            termoFinal_nto.style.display = "none";
            controlFinal_1.style.display = "none";
            controlFinal_2.style.display = "none";
        } else {
            pressFinal.style.display = "contents";
            apparatFinal.style.display = "none";
            termoFinal_spec.style.display = "none"
            termoFinal_vto.style.display = "none";
            termoFinal_nto.style.display = "none";
            controlFinal_1.style.display = "none";
            controlFinal_2.style.display = "none";
        }
    } else if (who_is == "termo_1") {
        if (termoTrigger_1 == 0) {
            apparatFinal.style.display = "none";
            startElementDialog.style.display = "contents";
            operatorStorage = who_is;
            nameOperation.innerHTML = "Операция спекания";
            pressFinal.style.display = "none";
            termoFinal_spec.style.display = "none"
            termoFinal_vto.style.display = "none";
            termoFinal_nto.style.display = "none";
            controlFinal_1.style.display = "none";
            controlFinal_2.style.display = "none";
        } else {
            termoFinal_spec.style.display = "contents"
            pressFinal.style.display = "none";
            apparatFinal.style.display = "none";
            termoFinal_vto.style.display = "none";
            termoFinal_nto.style.display = "none";
            controlFinal_1.style.display = "none";
            controlFinal_2.style.display = "none";
        }
    } else if (who_is == "control_1") {
        if (controlTrigger_1 == 0) {
            apparatFinal.style.display = "none";
            startElementDialog.style.display = "contents";
            operatorStorage = who_is;
            nameOperation.innerHTML = "Операция контроль образцов";
            pressFinal.style.display = "none";
            termoFinal_vto.style.display = "none";
            termoFinal_nto.style.display = "none";
            controlFinal_1.style.display = "none";
            controlFinal_2.style.display = "none";
        } else {
            controlFinal_1.style.display = "contents";
            pressFinal.style.display = "none";
            apparatFinal.style.display = "none";
            termoFinal_vto.style.display = "none";
            termoFinal_nto.style.display = "none";
            controlFinal_2.style.display = "none";
        }
    } else if (who_is == "control_2") {
        if (controlTrigger_2 == 0) {
            apparatFinal.style.display = "none";
            startElementDialog.style.display = "contents";
            operatorStorage = who_is;
            nameOperation.innerHTML = "Операция контроль заготовок";
            pressFinal.style.display = "none";
            termoFinal_vto.style.display = "none";
            termoFinal_nto.style.display = "none";
            controlFinal_1.style.display = "none";
            controlFinal_2.style.display = "none";
        } else {
            controlFinal_2.style.display = "contents";
            pressFinal.style.display = "none";
            apparatFinal.style.display = "none";
            termoFinal_nto.style.display = "none";
            controlFinal_1.style.display = "none";
        }
    } else if (who_is == "termo_2") {
        if (termoTrigger_2 == 0) {
            termoFinal_spec.style.display = "none";
            apparatFinal.style.display = "none";
            termoFinal_vto.style.display = "none";
            startElementDialog.style.display = "contents";
            operatorStorage = who_is;
            nameOperation.innerHTML = "Операция высокотемпературный отжиг";
            pressFinal.style.display = "none";
            termoFinal_nto.style.display = "none";
            controlFinal_1.style.display = "none";
            controlFinal_2.style.display = "none";
        } else {
            termoFinal_vto.style.display = "contents";
            pressFinal.style.display = "none";
            apparatFinal.style.display = "none";
            termoFinal_spec.style.display = "none";
            termoFinal_nto.style.display = "none";
            controlFinal_1.style.display = "none";
            controlFinal_2.style.display = "none";
        }
    } else if (who_is == "termo_3") {
        if (termoTrigger_3 == 0) {
            termoFinal_spec.style.display = "none";
            termoFinal_vto.style.display = "none";
            apparatFinal.style.display = "none";
            startElementDialog.style.display = "contents";
            operatorStorage = who_is;
            nameOperation.innerHTML = "Операция низкотемпературный отжиг";
            pressFinal.style.display = "none";
            termoFinal_nto.style.display = "none";
            controlFinal_1.style.display = "none";
            controlFinal_2.style.display = "none";
        } else {
            termoFinal_spec.style.display = "none";
            termoFinal_vto.style.display = "none";
            pressFinal.style.display = "none";
            apparatFinal.style.display = "none";
            termoFinal_nto.style.display = "contents";
            controlFinal_1.style.display = "none";
            controlFinal_2.style.display = "none";
        }
    }
    apparatDialog.style.display = "block";
}


function hideApparat(triggered) {
    let caclulate_control = 0;
    let all_part = 0;
    let good_part = 0;
    apparatDialog.style.display = "none";
    if (operatorStorage == "apparat") {
        if (triggered == "closed") {
            finalOperator = document.getElementById("final_operator");
            setOperatorName = document.getElementById("last_name_apparat");
            setOperatorName.innerHTML = finalOperator.value;

            current_date = new Date();
            time = current_date.getHours() + ":" + current_date.getMinutes();
            
            generalMass.innerHTML = document.getElementById("mass").value;
            finalMass.innerHTML = document.getElementById("fact_mass").value;
            timePomol.innerHTML = "Время помола: " + document.getElementById("pomol").value;
            //numberSmesi = document.getElementById("set_smes").value;
            document.getElementById("numberSmesi").innerHTML = document.getElementById("set_smes").value;


            chronologyItem = document.createElement("p");
            chronologyItem.innerHTML = "✅ " + finalOperator.value + " " + current_day + "." + date_arr_digit[current_month] + "." + current_year + " в " + time + " > подготовка";
            chronologyItem.id = "chronology_item";
            chronologyStack.appendChild(chronologyItem);
        } else {
            apparatTrigger++
            startElementDialog.style.display = "none";

            operatorDate = document.getElementById("apparat_date");
            operatorDate.innerHTML = current_day + "." + date_arr_digit[current_month] + "." + current_year;

            operatorName = document.getElementById("operator_name");
            setOperatorName = document.getElementById("last_name_apparat");
            setOperatorName.innerHTML = operatorName.value;

            current_date = new Date();
            time = current_date.getHours() + ":" + current_date.getMinutes();

            chronologyItem = document.createElement("p");
            chronologyItem.innerHTML = "⌛ " + operatorName.value + " " + current_day + "." + date_arr_digit[current_month] + "." + current_year + " в " + time + " > подготовка";
            chronologyItem.id = "chronology_item";
            chronologyStack.appendChild(chronologyItem);
        }

    } else if (operatorStorage == "press_man") {
        if (triggered == "closed") {
            finalOperator = document.getElementById("final_operator_press");
            setOperatorName = document.getElementById("last_name_press");
            setOperatorName.innerHTML = finalOperator.value;

            current_date = new Date();
            time = current_date.getHours() + ":" + current_date.getMinutes();

            countPart.innerHTML = document.getElementById("count_parts").value;
            factPart.innerHTML = document.getElementById("good_parts").value;
            badPart.innerHTML = document.getElementById("bad_parts").value;
            infoParts.innerHTML = document.getElementById("info_part").value;

            chronologyItem = document.createElement("p");
            chronologyItem.innerHTML = "✅ " + finalOperator.value + " " + current_day + "." + date_arr_digit[current_month] + "." + current_year + " в " + time + " > прессование";
            chronologyItem.id = "chronology_item";
            chronologyStack.appendChild(chronologyItem);
        } else {
            pressTrigger++
            startElementDialog.style.display = "none";

            operatorDate = document.getElementById("press_date");
            operatorDate.innerHTML = current_day + "." + date_arr_digit[current_month] + "." + current_year;

            operatorName = document.getElementById("operator_name");
            setOperatorName = document.getElementById("last_name_press");
            setOperatorName.innerHTML = operatorName.value;

            current_date = new Date();
            time = current_date.getHours() + ":" + current_date.getMinutes();

            chronologyItem = document.createElement("p");
            chronologyItem.innerHTML = "⌛ " + operatorName.value + " " + current_day + "." + date_arr_digit[current_month] + "." + current_year + " в " + time + " > прессование";
            chronologyItem.id = "chronology_item";
            chronologyStack.appendChild(chronologyItem);
        }
    } else if (operatorStorage == "termo_1") {
        if (triggered == "closed") {
            finalOperator = document.getElementById("final_operator_spec");
            setOperatorName = document.getElementById("last_name_termo_1");
            setOperatorName.innerHTML = finalOperator.value;

            current_date = new Date();
            time = current_date.getHours() + ":" + current_date.getMinutes();

            countPartSpec.innerHTML = document.getElementById("count_parts_spec").value;
            countSadkaSpec.innerHTML = "Номер садки: " + document.getElementById("info_part_spec").value;

            chronologyItem = document.createElement("p");
            chronologyItem.innerHTML = "✅ " + finalOperator.value + " " + current_day + "." + date_arr_digit[current_month] + "." + current_year + " в " + time + " > спекание";
            chronologyItem.id = "chronology_item";
            chronologyStack.appendChild(chronologyItem);
        } else {
            termoTrigger_1++
            startElementDialog.style.display = "none";

            operatorDate = document.getElementById("termo_1_date");
            operatorDate.innerHTML = current_day + "." + date_arr_digit[current_month] + "." + current_year;

            operatorName = document.getElementById("operator_name");
            setOperatorName = document.getElementById("last_name_termo_1");
            setOperatorName.innerHTML = operatorName.value;

            current_date = new Date();
            time = current_date.getHours() + ":" + current_date.getMinutes();

            chronologyItem = document.createElement("p");
            chronologyItem.innerHTML = "⌛ " + operatorName.value + " " + current_day + "." + date_arr_digit[current_month] + "." + current_year + " в " + time + " > спекание";
            chronologyItem.id = "chronology_item";
            chronologyStack.appendChild(chronologyItem);
        }
    } else if (operatorStorage == "control_1") {
        if (triggered == "closed") {
            finalOperator = document.getElementById("control_operator_1");
            setOperatorName = document.getElementById("last_name_control_1");
            setOperatorName.innerHTML = finalOperator.value;

            current_date = new Date();
            time = current_date.getHours() + ":" + current_date.getMinutes();

            all_part = document.getElementById("count_control_1").value;
            good_part = document.getElementById("good_count_control_1").value;
            countControl_1.innerHTML = document.getElementById("count_control_1").value;
            goodControl_1.innerHTML = document.getElementById("good_count_control_1").value;
            
            calculate_control = parseInt(all_part) - parseInt(good_part);
            badControl_1.innerHTML = "" + calculate_control

            chronologyItem = document.createElement("p");
            chronologyItem.innerHTML = "✅ " + finalOperator.value + " " + current_day + "." + date_arr_digit[current_month] + "." + current_year + " в " + time + " > контроль образцов";
            chronologyItem.id = "chronology_item";
            chronologyStack.appendChild(chronologyItem);
        } else {
            controlTrigger_1++
            startElementDialog.style.display = "none";

            operatorDate = document.getElementById("control_1_date");
            operatorDate.innerHTML = current_day + "." + date_arr_digit[current_month] + "." + current_year;

            operatorName = document.getElementById("operator_name");
            setOperatorName = document.getElementById("last_name_control_1");
            setOperatorName.innerHTML = operatorName.value;

            current_date = new Date();
            time = current_date.getHours() + ":" + current_date.getMinutes();

            chronologyItem = document.createElement("p");
            chronologyItem.innerHTML = "⌛ " + operatorName.value + " " + current_day + "." + date_arr_digit[current_month] + "." + current_year + " в " + time + " > контроль образцов";
            chronologyItem.id = "chronology_item";
            chronologyStack.appendChild(chronologyItem);
        }
    } else if (operatorStorage == "termo_2") {
        if (triggered == "closed") {
            finalOperator = document.getElementById("final_operator_vto");
            setOperatorName = document.getElementById("last_name_termo_2");
            setOperatorName.innerHTML = finalOperator.value;

            current_date = new Date();
            time = current_date.getHours() + ":" + current_date.getMinutes();

            countPartVto.innerHTML = document.getElementById("count_parts_vto").value;
            countSadkaVto.innerHTML = "Номер садки: " + document.getElementById("info_part_vto").value;

            chronologyItem = document.createElement("p");
            chronologyItem.innerHTML = "✅ " + finalOperator.value + " " + current_day + "." + date_arr_digit[current_month] + "." + current_year + " в " + time + " > ВТО";
            chronologyItem.id = "chronology_item";
            chronologyStack.appendChild(chronologyItem);
        } else {
            termoTrigger_2++
            startElementDialog.style.display = "none";

            operatorDate = document.getElementById("termo_2_date");
            operatorDate.innerHTML = current_day + "." + date_arr_digit[current_month] + "." + current_year;

            operatorName = document.getElementById("operator_name");
            setOperatorName = document.getElementById("last_name_termo_2");
            setOperatorName.innerHTML = operatorName.value;

            current_date = new Date();
            time = current_date.getHours() + ":" + current_date.getMinutes();

            chronologyItem = document.createElement("p");
            chronologyItem.innerHTML = "⌛ " + operatorName.value + " " + current_day + "." + date_arr_digit[current_month] + "." + current_year + " в " + time + " > ВТО";
            chronologyItem.id = "chronology_item";
            chronologyStack.appendChild(chronologyItem);
        }
    } else if (operatorStorage == "termo_3") {
        if (triggered == "closed") {
            finalOperator = document.getElementById("final_operator_nto");
            setOperatorName = document.getElementById("last_name_termo_3");
            setOperatorName.innerHTML = finalOperator.value;

            current_date = new Date();
            time = current_date.getHours() + ":" + current_date.getMinutes();

            countPartNto.innerHTML = document.getElementById("count_parts_nto").value;
            countSadkaNto.innerHTML = "Номер садки: " + document.getElementById("info_part_nto").value;

            chronologyItem = document.createElement("p");
            chronologyItem.innerHTML = "✅ " + finalOperator.value + " " + current_day + "." + date_arr_digit[current_month] + "." + current_year + " в " + time + " > НТО";
            chronologyItem.id = "chronology_item";
            chronologyStack.appendChild(chronologyItem);
        } else {
            termoTrigger_3++
            startElementDialog.style.display = "none";

            operatorDate = document.getElementById("termo_3_date");
            operatorDate.innerHTML = current_day + "." + date_arr_digit[current_month] + "." + current_year;

            operatorName = document.getElementById("operator_name");
            setOperatorName = document.getElementById("last_name_termo_3");
            setOperatorName.innerHTML = operatorName.value;

            current_date = new Date();
            time = current_date.getHours() + ":" + current_date.getMinutes();

            chronologyItem = document.createElement("p");
            chronologyItem.innerHTML = "⌛ " + operatorName.value + " " + current_day + "." + date_arr_digit[current_month] + "." + current_year + " в " + time + " > НТО";
            chronologyItem.id = "chronology_item";
            chronologyStack.appendChild(chronologyItem);
        }
    } else if (operatorStorage == "control_2") {
        if (triggered == "closed") {
            finalOperator = document.getElementById("control_operator_2");
            setOperatorName = document.getElementById("last_name_control_2");
            setOperatorName.innerHTML = finalOperator.value;

            current_date = new Date();
            time = current_date.getHours() + ":" + current_date.getMinutes();

            all_part = document.getElementById("count_control_2").value;
            good_part = document.getElementById("good_count_control_2").value;
            countControl_2.innerHTML = document.getElementById("count_control_2").value;
            goodControl_2.innerHTML = document.getElementById("good_count_control_2").value;
            
            calculate_control = parseInt(all_part) - parseInt(good_part);
            badControl_2.innerHTML = "" + calculate_control

            chronologyItem = document.createElement("p");
            chronologyItem.innerHTML = "✅ " + finalOperator.value + " " + current_day + "." + date_arr_digit[current_month] + "." + current_year + " в " + time + " > контроль заготовок";
            chronologyItem.id = "chronology_item";
            chronologyStack.appendChild(chronologyItem);
        } else {
            controlTrigger_2++
            startElementDialog.style.display = "none";

            operatorDate = document.getElementById("control_2_date");
            operatorDate.innerHTML = current_day + "." + date_arr_digit[current_month] + "." + current_year;

            operatorName = document.getElementById("operator_name");
            setOperatorName = document.getElementById("last_name_control_2");
            setOperatorName.innerHTML = operatorName.value;

            current_date = new Date();
            time = current_date.getHours() + ":" + current_date.getMinutes();

            chronologyItem = document.createElement("p");
            chronologyItem.innerHTML = "⌛ " + operatorName.value + " " + current_day + "." + date_arr_digit[current_month] + "." + current_year + " в " + time + " > контроль заготовок";
            chronologyItem.id = "chronology_item";
            chronologyStack.appendChild(chronologyItem);
        }
    }
}

apparatDialog.addEventListener("click", hideApparat);
apparatPopup.addEventListener("click", (event) => event.stopPropagation());