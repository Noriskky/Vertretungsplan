<!DOCTYPE html>
<html lang="en">
<?php   
    $info_array = array();
    
    enum Art: string  {
        case VERTRETUNG = 'Vertretung';
        case ROOM_CHANGE = 'Raum Wechsel';
        case OMITTED = 'Entfall';
    }

    enum Table: string {
        case LEFT = 'table-left';
        case RIGHT = 'table-right';
    }

    class Element {
        public Table $rowid;
        public $class;
        public $hour;
        public Art $art;
        public $lesson;
        public $lesson_old;
        public $room;
        public $room_old;
        public $teacher;
        public $teacher_old;
        public $additionalinfo;

        public function __construct(Table $rowid, $class, $hour, Art $art, $lesson, $lesson_old, $room, $room_old, $teacher, $teacher_old, $additionalinfo) {
            $this->rowid = $rowid;
            $this->class = $class;
            $this->hour = $hour;
            $this->art = $art;
            $this->lesson = $lesson;
            $this->lesson_old = $lesson_old;
            $this->room = $room;
            $this->room_old = $room_old;
            $this->teacher = $teacher;
            $this->teacher_old = $teacher_old;
            $this->additionalinfo = $additionalinfo;
        }

        public function add() {
            echo "<tr>";
            if (isset($this->class))              echo "<td>" . $this->class . "</td>";
            if (isset($this->hour))               echo "<td>" . $this->hour . "</td>";
            if (isset($this->art))                echo "<td>" . $this->art->value . "</td>";
            if (isset($this->lesson))             echo "<td>" . $this->lesson . "</td>";
            if (isset($this->lesson_old))         echo "<td>" . $this->lesson_old . "</td>";
            if (isset($this->room))               echo "<td>" . $this->room . "</td>";
            if (isset($this->room_old))           echo "<td>" . $this->room_old . "</td>";
            if (isset($this->teacher))            echo "<td>" . $this->teacher . "</td>";
            if (isset($this->teacher_old))        echo "<td>" . $this->teacher_old . "</td>";
            if (isset($this->additionalinfo))     echo "<td>" . $this->additionalinfo . "</td>";
            echo "</tr>";
        }
    }

    // Adds info to array
    function addInfo($class, $hour, $art, $lesson, $lesson_old, $room, $room_old, $teacher, $teacher_old, $additionalinfo) {
        $rowid;

        if (preg_replace('/[^0-9]/', '', $class) > 10) {
            $rowid = "table-right";
        } else {
            $rowid = "table-left";
        }

        array_push($info_array, new Element($rowid, $class, $hour, $art, $lesson, $lesson_old, $room, $room_old, $teacher, $teacher_old, $additionalinfo));
    }   
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vertretungsplan</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="clock" id="clock">00:00</div>
    <div class="background">
        <span class="splitter"></span>
        <div class="tile tile-1">
            <table class="tile-table table-left" id="table-left">
                <tr>
                    <th>Klasse</th>
                    <th>Stunde</th>
                    <th>Art</th>
                    <th>Fach</th>
                    <th>(Fach)</th>
                    <th>Raum</th>
                    <th>(Raum)</th>
                    <th>Lehrer</th>
                    <th>(Lehrer)</th>
                    <th>Vertretungstext</th>
                </tr>

                <?php 
                    $test = new Element(Table::LEFT, "7b", 1, Art::VERTRETUNG, "Mathe", "Mathe", "132", "132", "Hr. Vogel", "Fr. Vögeln", "-/-");
                    $test->add();
                 ?>
            </table>
        </div>

        <div class="tile tile-2">
            <table class="tile-table tile-table-1 table-right" id="table-right">
                <tr>
                    <th>Klasse</th>
                    <th>Stunde</th>
                    <th>Art</th>
                    <th>Fach</th>
                    <th>(Fach)</th>
                    <th>Raum</th>
                    <th>(Raum)</th>
                    <th>Lehrer</th>
                    <th>(Lehrer)</th>
                    <th>Vertretungstext</th>
                </tr>
            </table>
        </div>
    </div>
    <div class="news">
        <ul class="news-ul">
            <span class="news-ul-span">Hofdienst 7f</span>
            <span class="news-ul-span">Fußball-AG entfällt</span>
            <span class="news-ul-span">Kanu-AG entfällt</span>
            <span class="news-ul-span">1-3 Std. entfällt für 6c</span>
        </ul>
    </div>
</body>
</html>